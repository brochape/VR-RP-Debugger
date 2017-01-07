var fs = require('fs');
var peg = require('pegjs')

var syntax = fs.readFileSync("syntax.js").toString();

var parser = peg.generate(syntax);

parser.parse("var signalTest = Signal(90)\nvar boolTest = true || false || true\nvar stringTest = 'coucou'")