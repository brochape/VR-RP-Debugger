const Browser = require('zombie');


var fs = require('fs');

// fs.readFile('index.html', 'utf8', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//   var result = data.replace('Elm.Array.make = function (_elm) {', '\nvar globalVar;\nElm.Array.make = function (_elm) {');
//   var result2 = result.replace('inputs = rootNode.kids;', 'inputs = rootNode.kids;\n\t\t\tglobalVar = inputs;')

//   fs.writeFileSync('index.html', result2, 'utf8', function (err) {
//    if (err) return console.log(err);
//  });
// });

const browser = new Browser();

browser.silent = true
var str = "";

browser.visit('file:///home/supayrponey/Master_Thesis/ZombieJs/index.html', function() {
  //console.log(browser.location.href);
  // console.log(browser.window.globalVar.value)
  // var childern = browser.window.globalVar.value
  // for (var i = childern.length - 1; i >= 0; i--) {
  //     console.log(childern[i]);
  // }
  // console.log(browser.window.globalVar.value.children[0].children[0]);
    // console.log(browser.window.globalVar.value);
    // console.log(browser.window.globalVar)
    // console.log(browser.window.globalVar);
    //printGraph(browser.window.globalVar)
    //traverse(browser.window.globalVar.value, 0);
    var graph = browser.window.globalVar;
    for (var i = graph.length - 1; i >= 0; i--) {
      traverse(graph[i]);
    }
    writeToFile("test.dot");
});


function traverseBF(graphRoot){

 
 
    while(currentTree){
        for (var i = 0, length = graphRoot.kids.length; i < length; i++) {
            queue.enqueue(graphRoot.kids[i]);
        }
 
        traverseBF(currentTree);
        currentTree = queue.dequeue();
    }
}

function printGraph(queue)
{
  queue = queue.slice(0);

  console.log('digraph { //');
  var seen = [];
  while (queue.length > 0)
  {
    var node = queue.pop();
    var id = node.id;
    if (seen.indexOf(id) < 0)
    {
      console.log('%d [label="%s"]; //', id, node.name);
      var kids = node.kids || [];
      for (var i = kids.length; i--; )
      {
        console.log('%d -> %d', id, kids[i].id, '; //');
      }
      queue = queue.concat(kids);
      seen.push(id);
    }
  }
  console.log('} //');
}

function getName(e){
    if (e.tagName != null && e.tagName != undefined) {return e.tagName} else {return e.text}
}

function traverse(node){
    console.log(node.kids);
    if (node.kids != undefined) {
        for (var i = node.kids.length - 1; i >= 0; i--) {

            console.log(node.name);
            str += '"' + node.name + '"'  + "->" + '"' + node.kids[i].name + '"' + "\n";
            traverse(node.kids[i]);
        }
    }
}

function writeToFile(filename){
    fs.writeFile(filename, str, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    }); 
}

