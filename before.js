const fs = require('fs');

fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace('Elm.Array.make = function (_elm) {', '\nvar globalVar;\nElm.Array.make = function (_elm) {');
  var result2 = result.replace('inputs = rootNode.kids;', 'inputs = rootNode.kids;\n\t\t\tglobalVar = inputs;')

  fs.writeFileSync('index.html', result2, 'utf8', function (err) {
   if (err) return console.log(err);
 });
});