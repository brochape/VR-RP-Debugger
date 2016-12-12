const Browser = require('zombie');
const nunjucks = require('nunjucks')
const fs = require('fs');

const browser = new Browser();

browser.silent = true
var str = "";

browser.visit('file:///home/supayrponey/Master_Thesis/ZombieJs/index.html', function() {

    var graph = browser.window.globalVar;
    str += "digraph {\n"
    for (var i = graph.length - 1; i >= 0; i--) {
      traverse(graph[i]);
    }
    str += "}"
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
            str += '\t"' + node.name + '"'  + "->" + '"' + node.kids[i].name + '"' + "\n";
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


function create_node_entity(name, pos_x, pos_y, pos_z){
  var node_template = '<a-entity bmfont-text="text:'+ name +
                  '"; color: #333" position="' +
                  pos_x + ' ' + pos_y + ' ' + pos_z + '"></a-entity>'
  var circle_template = '<a-ring color="black" scale="0.9 0.25 2" radius-inner="1" position="'+
                  (pos_x + 0.55) + ' ' +
                  (pos_y + 0.07) + ' ' +
                  pos_z +'" radius-outer="1.01"></a-ring>'
  return node_template + '\n\t\t' + circle_template
}


node_test = create_node_entity("Coucou", 0, 4, -4)


nunjucks.configure({ autoescape: false });
a = nunjucks.render('template.html', { 
    title: 'Test',
    scene: node_test
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