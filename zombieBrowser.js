const Browser = require('zombie');
const nunjucks = require('nunjucks')
const fs = require('fs');
const parseString = require('xml2js').parseString;
const dot = require('graphlib-dot')
const exec = require('child_process').exec;

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
    // console.log(node.kids);
    if (node.kids != undefined) {
        for (var i = node.kids.length - 1; i >= 0; i--) {

            // console.log(node.name);
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
  var circle_template = '<a-ring color="black" scale="0.9 0.25 2" radius-inner="0.97" position="'+
                  (pos_x + 0.55) + ' ' +
                  (pos_y + 0.07) + ' ' +
                  pos_z +'" radius-outer="1.01"></a-ring>'
  return node_template + '\n\t\t' + circle_template
}

function create_line_entity(path){
    html = '<a-entity meshline="lineWidth: 2; path: ';
    for (var i = path.length - 1; i >= 0; i--) {
      html += path[i][0] + ' ' + path[i][1] + ' ' + '-4';
      if (i!=0) {html+=','}
    }
    html += '; color: black"></a-entity>';
    return html;
}

function stringToObj(path,value,obj) {
    var parts = path.split("."), part;
    while(part = parts.shift()) {
        if( typeof obj[part] != "object") obj[part] = {};
        obj = obj[part]; // update "pointer"
    }
    obj["_x"] = value;
}

var htmlString = '';
nunjucks.configure({ autoescape: false });

function execute(command){
    exec(command, function(error, stdout, stderr){
        var graph = dot.read(stdout);
        for (var key in graph._nodes){
          pos = graph._nodes[key].pos.split(',');
          htmlString += create_node_entity(key, parseFloat(pos[0])-70, parseFloat(pos[1])/70, -4) + "\n\t\t";
        }
        for (var edge in graph._edgeLabels){
            edges = graph._edgeLabels[edge].pos.replace("e,","").split(" ")
            var res_edges = [];
            updated_edges = [];
            updated_edges.push(edges[0]);
            updated_edges.push(edges[1]);

            edges = updated_edges
            edges.forEach(function(item) {
              temp_edge = item.split(',').map(parseFloat);
              temp_edge[0] -= 69.5;
              temp_edge[1] /= 70;
              console.log(temp_edge);

              res_edges.push(temp_edge);
            })
            
            htmlString += create_line_entity(res_edges) + "\n\t\t";
        }
        a = nunjucks.render('template.html', { 
              title: 'Example',
              scene: htmlString
            });
        writeToHTMLFile("test.html",a)
        // console.log(JSON.parse(JSON.stringify(graph._nodes)));
    });
};


execute("dot test.dot", parseString);

node_test = create_node_entity("Coucou", 0, 4, -4)



function writeToHTMLFile(filename, str){
    fs.writeFile(filename, str, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The HTML file was saved!");
    }); 
}

console.log(htmlString);
