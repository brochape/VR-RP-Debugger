var fs = require('fs');
var peg = require('pegjs')

var syntax = fs.readFileSync("syntax.pegjs").toString();

var parser = peg.generate(syntax);

var rootNode = {
    name: "root",
    parent: null,
    children: [],

}

var ast = parser.parse("var signalTest = Signal(90)\nvar boolTest = true || false || true\nvar stringTest = 'coucou'")
console.log(ast[0][0].children[0])

