var fs = require('fs');
var peg = require('pegjs')

var syntax = fs.readFileSync("syntax.js").toString();

var parser = peg.generate(syntax);