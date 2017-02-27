var fs = require('fs');
var peg = require('pegjs')

var syntax = fs.readFileSync("syntax.pegjs").toString();

var rootNode = {
    name: "root",
    parent: null,
    children: [],

}

var parser = peg.generate(syntax);

var code = "activate seconds\nmap( (a)=>(a+1) seconds)\nfold(seconds + 0)"

//
var ast = parser.parse(code)//\nvar signalTest = Signal(90)\nvar boolTest = true || false || true\nvar stringTest = 'coucou'
ast = ast.map(([x, y]) => x);
// console.log(ast[0])

var secondSignal = false;

var signalGraph = {
    name: "root",
    children: []
}

//map signal + 1  | creates a new signal that will do +1 on the current value of signal
//fold ((a)=>(a+1)signal + 1  | will add the value of signal to the current value (cumulative). Starts at 1


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
                        children: []
                    }
                    signalGraph["seconds"] = secondSignal;
                    break;
            }
            break;

        case "fold":
            [signal,operand,initVal] = statement.children.map((x)=>(x.value));
            var signalValue = signalGraph[signal].value;
            var formula = "<signalValue>" + operand + "currentValue" ;
            var initVal = eval(formula.replace("<signalValue>",signalValue).replace("currentValue",initVal));
            var signalNode = {
                name: "fold",
                value: initVal,
                formula: formula
            }
            signalGraph[signal].children.push(signalNode);
            break;

        case "map":
            [lambda, signal] = statement.children;
            signal = signal.value;
            // console.log(lambda);

            var body = lambda.children[1];
            var param = lambda.children[0].value;
            var signalValue = signalGraph[signal].value;

            var initVal = eval(body.replace(param,signalValue))

            var signalNode = {
                name: "map",
                value: initVal,
                formula: [body,param]
            }
            signalGraph[signal].children.push(signalNode);
            break;

        case "filter":
            [lambda, initValue, signal] = statement.children;
            [initValue,signal] = [initValue,signal].map((x)=>(x.value));

            var body = lambda.children[1];
            var param = lambda.children[0].value;
            var signalValue = signalGraph[signal].value;

            var behaviourNode = {
                name: "filter",
                value: initValue,
                formula: [signal,body,initVal]
            }
            signalGraph[signal].children.push(behaviourNode);
            break;


    }   
}
if (secondSignalEnabled) {
    setInterval(function(){ 
        signalGraph[signal].value ++;
        for (var i = 0; i < signalGraph.seconds.children.length; i++) {
            node = signalGraph.seconds.children[i];
            switch(node.name){
                case "fold":
                    node.value = eval(formula.replace("<signalValue>",signalGraph[signal].value).replace("currentValue",node.value));
                    break;
                case "map":
                    //TODO
                    node.value = eval()
                    break;

            }
            console.log(node);
         } //code goes here that will be run every 5 seconds.    
    }, 1000);
}
console.log(signalGraph.seconds);

// function findValueForSignal(tree,signal){
//     return tree.children.filter((el)=>(el.name == signal))[0].value;
// }

var indent = 1;
function walk(tree) {
    tree.forEach(function(node) {
        if(node.children) {
            indent ++;
            walk(node.children);
        }
        if(tree.indexOf(node) === tree.length - 1) {
            indent--;
        }
    })
}




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
