var fs = require('fs');
var peg = require('pegjs')

var syntax = fs.readFileSync("syntax.js").toString();

var parser = peg.generate(syntax);
console.log(parser.parse("var co0c = Signal(9)"))