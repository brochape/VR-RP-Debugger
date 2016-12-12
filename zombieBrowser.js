const Browser = require('zombie');
const nunjucks = require('nunjucks')
const fs = require('fs');

const browser = new Browser();

browser.silent = true
var str = "";

browser.visit('file:///home/supayrponey/Master_Thesis/ZombieJs/index.html', function() {

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


nunjucks.configure({ autoescape: false });
a = nunjucks.render('template.html', { 
    title: 'Test',
    scene: '<a-cylinder radius = "0.03" height= "0.5" color="black" open-ended="true" position="0.5 1.6 -4.5"></a-cylinder>'
     });

function writeToHTMLFile(filename, str){
    fs.writeFile(filename, str, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    }); 
}

writeToHTMLFile("test.html", a);