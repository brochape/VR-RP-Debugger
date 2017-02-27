var fs = require('fs');
var peg = require('pegjs')

var syntax = fs.readFileSync("syntax.pegjs").toString();

var rootNode = {
    name: "root",
    parent: null,
    children: [],

}

var parser = peg.generate(syntax);

//
var ast = parser.parse("activate seconds\nfold(seconds + 0)\nfilter((a) => ( a > 0 ) seconds 0)")//\nvar signalTest = Signal(90)\nvar boolTest = true || false || true\nvar stringTest = 'coucou'
ast = ast.map(([x, y]) => x);
// console.log(ast[0])

var secondSignal = false;

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
                    secondSignal = true;
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
            var formula = signalValue + operand + initVal;
            var initVal = eval(formula);
            var signalNode = {
                name: "fold",
                value: initVal,
                formula: [signal,operand,initVal]
            }
            signalGraph[signal].children.push(signalNode);
            break;

        case "map":
            [lambda, signal] = statement.children.map((x)=>(x.value));
            break;

        case "filter":
            [lambda, initValue, signal] = statement.children;
            [initValue,signal] = [initValue,signal].map((x)=>(x.value));

            var body = lambda.children[1];
            var param = lambda.children[0].value;
            console.log(signal)
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
