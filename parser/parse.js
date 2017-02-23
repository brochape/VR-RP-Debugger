var fs = require('fs');
var peg = require('pegjs')

var syntax = fs.readFileSync("syntax.pegjs").toString();

var rootNode = {
    name: "root",
    parent: null,
    children: [],

}

var parser = peg.generate(syntax);


var ast = parser.parse("fold(seconds + 0)\nvar signalTest = Signal(90)\nvar boolTest = true || false || true\nvar stringTest = 'coucou'")
console.log(ast)


var indent = 1;
function walk(tree) {
    tree.forEach(function(node) {
        console.log('--' + Array(indent).join('--'), node.name);
        if(node.children) {
            indent ++;
            walk(node.children);
        }
        if(tree.indexOf(node) === tree.length - 1) {
            indent--;
        }
    })
}

for (var i = ast.length - 1; i >= 0; i--) {
    walk(ast[i])
}