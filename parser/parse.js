var fs = require('fs');
var peg = require('pegjs')

var syntax = fs.readFileSync("syntax.pegjs").toString();

var rootNode = {
    name: "root",
    parent: null,
    children: [],

}

var parser = peg.generate(syntax);


var ast = parser.parse("fold(seconds + 0)\nfilter((a) => ( a > 0 ) 0 numbers)")//\nvar signalTest = Signal(90)\nvar boolTest = true || false || true\nvar stringTest = 'coucou'
ast = ast;
console.log(ast[1][0].children)


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
