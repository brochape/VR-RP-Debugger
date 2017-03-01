const nunjucks = require('nunjucks')
const fs = require('fs');
const parseString = require('xml2js').parseString;
const dot = require('graphlib-dot')
const exec = require('child_process').exec;

var parser = require('./parse.js');

var code = "activate seconds\nmap( (a)=>(a+1) seconds)\nfold(seconds + 0)\nfilter((a)=>(a%3==0) seconds 0)"
ast = parser.parse(code);

var secondSignal = false;
signalGraph = parser.interprete(ast);
parser.handle_signals(signalGraph);
setInterval(function(){console.log(signalGraph.seconds.children)}, 2000);

var str = "";
make_dot_file(signalGraph);

function make_dot_file(graph) {
    // console.log(graph.seconds);
    str += "digraph {\n"
    // for (var i = graph.seconds.length - 1; i >= 0; i--) {
    traverse(graph.seconds);
    // }
    str += "}"
    writeToFile("test.dot", str);
};

function traverse(node){
    // console.log(node.kids);
    if (node.children != undefined) {
        for (var i = node.children.length - 1; i >= 0; i--) {

            str += '\t"' + node.name + '\n    ' + node.value + '"'  + "->" + '"' + node.children[i].name + '\n    ' + node.children[i].value +'"' + "\n";
            traverse(node.children[i]);
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

var ID = 1;

function create_node_entity(name, pos_x, pos_y, pos_z){
    var node_template = '<a-entity id="' + ID + '" bmfont-text="text:'+ name +
                  '"; color: #333" position="' +
                  (pos_x - 0.35) + ' ' + (pos_y - 0.17) + ' ' + pos_z + '"></a-entity>';
    ID += 1;
    var circle_template = '<a-ring id="' + ID + '" color="black" scale="0.9 0.25 2" radius-inner="0.97" position="'+
                  (pos_x) + ' ' +
                  (pos_y) + ' ' +
                  pos_z +'" radius-outer="1"></a-ring>';
    ID += 1;
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
          htmlString += create_node_entity(key, parseFloat(pos[0])/40, parseFloat(pos[1])/70, -4) + "\n\t\t";
        }
        console.log(graph._edgeLabels);
        for (var edge in graph._edgeLabels){
            edges = graph._edgeLabels[edge].pos.replace("e,","").split(" ")
            var res_edges = [];
            updated_edges = [];
            updated_edges.push(edges[0]);
            updated_edges.push(edges[1]);

            edges = updated_edges
            // console.log(edges);
            edges.forEach(function(item) {
              temp_edge = item.split(',').map(parseFloat);
              temp_edge[0] /= 40;
              temp_edge[1] /= 70;
              // console.log(temp_edge);

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




function writeToHTMLFile(filename, str){
    fs.writeFile(filename, str, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The HTML file was saved!");
    }); 
}
