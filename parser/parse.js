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
console.log(ast[0])

var secondSignal = false;

var signalGraph = {
    name: "root",
    children: []
}


for (var i = 0; i < ast.length; i++) {
    var statement = ast[i];
    switch(statement.name){
        case "signalActivation":
            switch(statement.children[0].value){
                case "seconds":
                    secondSignal = true;
                    var secondSignal = {
                        name: "secondSignal",
                        value: 0,
                        children: []
                    }
                    signalGraph.children.push(secondSignal)
            }
    }   
}
console.log(signalGraph);

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


