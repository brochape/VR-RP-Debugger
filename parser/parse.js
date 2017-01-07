var fs = require('fs');
var peg = require('pegjs')

var syntax = fs.readFileSync("syntax.js").toString();

var parser = peg.generate(syntax);

parser.parse("var signalTest = Signal(9)\n\
              var boolTest = True or False or True")