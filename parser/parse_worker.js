
var code = decodeEntities(document.querySelector(".codeEditor").innerHTML.split("<br>").join("\n"));
var syntax = '_ = " "'//TODO: load correct syntax
var parser = peg.generate(syntax);
var ast = parser.parse (code);
postMessage(ast);