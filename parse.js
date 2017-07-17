var fs = require('fs');
var peg = require('pegjs')

var ID = 1;

// console.log(ast[0])
module.exports = {
    parse: function(codeString) {
        var syntax = fs.readFileSync("syntax.pegjs").toString();

        var parser = peg.generate(syntax);

        var ast = parser.parse(codeString)//\nvar signalTest = Signal(90)\nvar boolTest = true || false || true\nvar stringTest = 'coucou'
        ast = ast.map(([x, y]) => x);

        return ast;
    },

    findSignalNode: function(signalGraph, signalName) {
        function searchInNode(node, signalName) {
            // console.log(node);
            if (node.ref == signalName) {
                return node;
            }
            else if (node.children) {
                var i;
                var result = null;
                for(i = 0; result == null && i < node.children.length; i++){
                    result = searchInNode(node.children[i], signalName);
               }
               return result;
            }
            return null;
        }
        var i;
        var result = null;
        var keys = Object.keys(signalGraph);
        for (i = 0; result == null && i < keys.length; i++){
            // console.log(signalGraph);
            if (signalGraph[keys[i]].ref ==signalName ) {
                result = signalGraph[keys[i]];
            }
            else{
                result = searchInNode(signalGraph[keys[i]], signalName);
            }
        }
        return result;
    },

    nodeInterpreter: function(signalGraph,statement){
            console.log(statement.name, statement.location.start.line);
            switch(statement.name){
                case "fold":
                    [signal,operand,initVal] = statement.children.map((x)=>(x.value));
                    if (Object.keys(signalGraph).indexOf(signal) >= 0) {
                        var signalValue = signalGraph[signal].value;
                    }
                    else{
                        var signalValue = this.findSignalNode(signalGraph,signal).value;
                    }
                    var formula =  "currentValue" + operand + "$$signalValue$$" ;
                    //var initVal = eval(formula.replace("$$signalValue$$",signalValue).replace("currentValue",initVal));
                    console.log("InitValue:"+initVal);
                    var signalNode = {
                        name: "fold",
                        value: initVal,
                        initValue: initVal,
                        globalBreakpoint: false,
                        formula: formula,
                        id: ID,
                        ref: "",
                        line: statement.location.start.line,
                        children: [],
                        parents: [signal]
                    }
                    ID += 1;
                    return [signal,signalNode];

                case "map":
                    [lambda, signal] = statement.children;
                    signal = signal.value;

                    var body = lambda.children[1];
                    var param = lambda.children[0].value;
                    if (Object.keys(signalGraph).indexOf(signal) >= 0) {
                        var signalValue = signalGraph[signal].value;
                    }
                    else{
                        var signalValue = this.findSignalNode(signalGraph,signal).value;
                    }

                    var initVal = eval(body.replace(param,signalValue))

                    var signalNode = {
                        name: "map",
                        value: initVal,
                        initValue: initVal,
                        formula: [body,param],
                        globalBreakpoint: false,
                        localBreakpoint: false,
                        id: ID,
                        ref: "",
                        line: statement.location.start.line,
                        children: [],
                        parents: [signal]
                    }
                    ID += 1;
                    return [signal,signalNode];

                case "filter":
                    [lambda, initValue, signal] = statement.children;
                    [initValue,signal] = [initValue,signal].map((x)=>(x.value));

                    var body = lambda.children[1];
                    var param = lambda.children[0].value;


                    if (Object.keys(signalGraph).indexOf(signal) >= 0) {
                        var signalValue = signalGraph[signal].value;
                    }
                    else{
                        var signalValue = this.findSignalNode(signalGraph,signal).value;
                    }

                    var signalNode = {
                        name: "filter",
                        value: initValue,
                        initValue: initValue,
                        formula: [body, param],
                        globalBreakpoint: false,
                        localBreakpoint: false,
                        id: ID,
                        ref: "",
                        line: statement.location.start.line,
                        children: [],
                        parents: [signal]
                    }
                    ID += 1;
                    return [signal,signalNode];


                case "merge":
                    [operation] = statement.children;
                    [signal1,signal2] = operation.children.map((x)=>(x.value));
                    operator = operation.value;


                    var signal1Value = this.findSignalNode(signalGraph,signal1).value;
                    var signal2Value = this.findSignalNode(signalGraph,signal2).value;

                    initValue = eval(signal1Value + operator + signal2Value);
                    // console.log(initValue);

                    var signalNode = {
                        name: "merge",
                        value: initValue,
                        initValue: initValue,
                        formula: [signal1, signal2, operator],
                        globalBreakpoint: false,
                        localBreakpoint: false,
                        id: ID,
                        ref: "",
                        line: statement.location.start.line,
                        children: [],
                        parents: [signal1,signal2]
                    }
                    ID += 1;
                    return [signal1,signalNode];

            }
    },

    interprete: function(ast){
        var signalGraph = {
            name: "root",
            children: []
        }
        for (var j = 0; j < ast.length; j++) {
            var statement = ast[j];
            switch(statement.name){
                case "signalActivation":
                    var signalName = statement.children[0].value;
                    switch(signalName){
                        case "seconds":
                            secondSignalEnabled = true;
                            var secondSignal = {
                                name: signalName,
                                value: 0,
                                initValue: 0,
                                ref: signalName,
                                id: ID,
                                globalBreakpoint: false,
                                localBreakpoint: false,
                                children: []

                            }
                            ID += 1;
                            signalGraph[signalName] = secondSignal;
                            break;
                        case "input":
                            var inputSignal = {
                                name: signalName,
                                value: 0,
                                initValue: 0,
                                ref: signalName,
                                id: ID,
                                globalBreakpoint: false,
                                localBreakpoint: false,
                                children: []

                            }
                            ID += 1;
                            signalGraph[signalName] = inputSignal;
                            break;
                    }
                    break;

                case "fold":
                case "map":
                case "merge":
                case "filter":
                    [signal,node] = this.nodeInterpreter(signalGraph,statement);
                    // console.log(node.parents);
                    for (var i = 0; i < node.parents.length; i++) {
                        // console.log(node.parents[i]);
                        parentsNode = this.findSignalNode(signalGraph,node.parents[i]);
                        // console.log(parentsNode);
                        parentsNode.children.push(node);
                    }
                    break;
                case "=":
                    var varName = statement.children[0].name;
                    var subStatement = statement.children[1];
                    [signal,node] = this.nodeInterpreter(signalGraph,subStatement);
                    // console.log(node.parents);
                    node.ref = varName;
                    for (var i = 0; i < node.parents.length; i++) {
                        parentsNode = this.findSignalNode(signalGraph,node.parents[i]);
                        parentsNode.children.push(node);
                    }
                    break;



            }   
        }
        return signalGraph;
        
    },

}