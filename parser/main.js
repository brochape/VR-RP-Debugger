const nunjucks = require('nunjucks')
const fs = require('fs');
const parseString = require('xml2js').parseString;
const dot = require('graphlib-dot')
const exec = require('child_process').exec;

var parser = require('./parse.js');

var code = "activate seconds\nvar mapVar = map( (a)=>(a+1) seconds)\nfold(seconds + 0)\nfilter((a)=>(a%3==0) seconds 0)\nvar map2 = map((a)=>(a+1) mapVar)\nmerge(mapVar map2 +)"
ast = parser.parse(code);
// console.log(ast);

signalGraph = parser.interprete(ast);
// setInterval(function(){console.log(signalGraph.seconds.children)}, 2000);

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
            str += '\t"' + node.name + "$$"+ node.id+"$$"  + '\n    ' + node.value + '"'  + "->" + '"' + node.children[i].name + "$$"+ node.children[i].id+"$$"  + '\n    ' + node.children[i].value +'"' + "\n";
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

//A Textnode with ID i is associated with a circle of ID i*10000
function create_node_entity(name, pos_x, pos_y, pos_z, ID){

    var circle_template = '<a-entity class= "node" id="' + ID + '" material="color: white" geometry="primitive: circle; radius-outer:1; radius-inner:0.97; height: auto" scale="0.9 0.25 2" position="'+
                  (pos_x) + ' ' +
                  (pos_y) + ' ' +
                  pos_z +'" text="align: center; zOffset: 0.01; color: black; font: https://cdn.aframe.io/fonts/Roboto-msdf.json; opacity: 1; side: double; value: '+ name.replace("\n","\n\n") +
                  '; width: 8.9; wrapCount: 60.6; wrapPixels: 1500; zOffset: 0"></a-entity>';
    return circle_template
}

function create_line_entity(path){
    html = '<a-entity meshline="lineWidth: 2; path: ';
    for (var i = path.length - 1; i >= 0; i--) {
      html += path[i][0] + ' ' + path[i][1] + ' ' + '-2.5';
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
            splitname = key.split("$$");
            name = splitname[0] + splitname[2]
            id = splitname[1]
            htmlString += create_node_entity(name, parseFloat(pos[0])/40 -2.5, parseFloat(pos[1])/70, -2.5, id) + "\n\t\t";
        }
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
              temp_edge[0] -= 2.5;
              temp_edge[1] /= 70;
              // console.log(temp_edge);

              res_edges.push(temp_edge);
            })
            
            htmlString += create_line_entity(res_edges) + "\n\t\t";
        }
        console.log(code);
        a = nunjucks.render('template.html', { 
              title: 'VaRken Debugger',
              scene: htmlString,
              graph: JSON.stringify(signalGraph),
              code: code.split('\n').join('<br />')
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
