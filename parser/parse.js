var fs = require('fs');
var peg = require('pegjs')

var syntax = fs.readFileSync("syntax.pegjs").toString();

var rootNode = {
    name: "root",
    parent: null,
    children: [],

}

var parser = peg.generate(syntax);


var ast = parser.parse("activate seconds\nfold(seconds + 0)\nfilter((a) => ( a > 0 ) 0 numbers)")//\nvar signalTest = Signal(90)\nvar boolTest = true || false || true\nvar stringTest = 'coucou'
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
            var behaviourNode = {
                name: "operation",
                value: initVal,
                formula: [signal,operand,initVal]
            }
            signalGraph[signal].children.push(behaviourNode);
            break;

    }   
}
console.log(signalGraph.seconds.children[0]);

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


