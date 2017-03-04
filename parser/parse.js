var fs = require('fs');
var peg = require('pegjs')

var ID = 1;

// console.log(ast[0])
module.exports = {
    parse: function(codeString) {
        var syntax = fs.readFileSync("syntax.pegjs").toString();

        var parser = peg.generate(syntax);


        //
        var ast = parser.parse(codeString)//\nvar signalTest = Signal(90)\nvar boolTest = true || false || true\nvar stringTest = 'coucou'
        ast = ast.map(([x, y]) => x);

        return ast;
    },

    nodeInterpreter: function(signalGraph,statement){

            switch(statement.name){
                case "fold":
                    [signal,operand,initVal] = statement.children.map((x)=>(x.value));
                    var signalValue = signalGraph[signal].value;
                    var formula = "$$signalValue$$" + operand + "currentValue" ;
                    var initVal = eval(formula.replace("$$signalValue$$",signalValue).replace("currentValue",initVal));
                    var signalNode = {
                        name: "fold",
                        value: initVal,
                        formula: formula,
                        id: ID,
                        children: [],
                        parent: signal
                    }
                    ID += 1;
                    return [signal,signalNode];

                case "map":
                    [lambda, signal] = statement.children;
                    signal = signal.value;

                    var body = lambda.children[1];
                    var param = lambda.children[0].value;
                    var signalValue = signalGraph[signal].value;

                    var initVal = eval(body.replace(param,signalValue))

                    var signalNode = {
                        name: "map",
                        value: initVal,
                        formula: [body,param],
                        id: ID,
                        children: [],
                        parent: signal
                    }
                    ID += 1;
                    return [signal,signalNode];


                case "filter":
                    [lambda, initValue, signal] = statement.children;
                    [initValue,signal] = [initValue,signal].map((x)=>(x.value));

                    var body = lambda.children[1];
                    var param = lambda.children[0].value;
                    var signalValue = signalGraph[signal].value;

                    var signalNode = {
                        name: "filter",
                        value: initValue,
                        formula: [body, param],
                        id: ID,
                        children: [],
                        parent: signal
                    }
                    ID += 1;
                    return [signal,signalNode];

            }
    },

    interprete: function(ast){
        var signalGraph = {
            name: "root",
            children: []
        }

        for (var i = 0; i < ast.length; i++) {
            var statement = ast[i];
            switch(statement.name){
                case "signalActivation":
                    var signalName = statement.children[0].value;
                    switch(signalName){
                        case "seconds":
                            secondSignalEnabled = true;
                            var secondSignal = {
                                name: signalName,
                                value: 0,
                                id: ID,
                                children: []

                            }
                            ID += 1;
                            signalGraph["seconds"] = secondSignal;
                            break;
                    }
                    break;

                case "fold":
                case "map":
                case "filter":
                    [signal,node] = this.nodeInterpreter(signalGraph,statement);
                    signalGraph[signal].children.push(node);
                    break;
                case "=":
                    var varName = statement.children[0].name;
                    var subStatement = statement.children[1];
                    [signal,node] = this.nodeInterpreter(signalGraph,subStatement);
                    node.ref = varName;
                    signalGraph[signal].children.push(node);



            }   
        }
        return signalGraph;
        
    },

}




//map signal + 1  | creates a new signal that will do +1 on the current value of signal
//fold ((a)=>(a+1)signal + 1  | will add the value of signal to the current value (cumulative). Starts at 1




// simpleBody 
//     = left:operand space operator:operator space right:operand {
//       var leftNode  = {
//         name: "leftOperand",
//         value: left,
//         children: []
//       }

//       var rightNode = {
//         name: "rightOperand",
//         value: right,
//         children: []

//       }

//         return {
//           name: "body",
//           value: operator,
//           children: [leftNode,rightNode]
//         }
//       }
