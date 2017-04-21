var dotIDtoMyID = {}

function make_dot_file(graph) {
    str = "digraph {\n"
    // for (var i = graph.seconds.length - 1; i >= 0; i--) {
    traverse(graph.seconds);
    // }
    str += "}";
    return str;
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

function get_json(dotString) {
	return Viz(dotString, {format: "json"})
}

function json_to_hml(jsonGraph,z_index) {
	//console.log(jsonGraph.objects)
	htmlString = ""
	// console.log(jsonGraph.edges[0]._hdraw_)
	for (var node in jsonGraph.objects){
        pos = jsonGraph.objects[node].pos.split(',');
        // console.log(pos)
        splitname = jsonGraph.objects[node].name.split("$$");
        name = splitname[0] + splitname[2]
        id = splitname[1]
        dotIDtoMyID[jsonGraph.objects[node]._gvid] = id
        create_node_entity(name, parseFloat(pos[0])/40 -5, parseFloat(pos[1])/70, -5 - z_index*8, id) + "\n\t\t";
    }
	for (var edge in jsonGraph.edges){


	    var fromNode = jsonGraph.edges[edge].head
	    var toNode = jsonGraph.edges[edge].tail

	    
	    path = jsonGraph.edges[edge]._draw_[1].points

	    path.forEach(function(item) {
	      item[0] /= 40;
	      item[0] -= 5;
	      item[1] /= 70;
	    })
	    
	    htmlString += create_line_entity(path,fromNode,toNode, -5 - z_index*8) + "\n\t\t";
	}
	return htmlString;
}

function create_node_entity(name, pos_x, pos_y, pos_z, ID){

	var scene = document.querySelector('a-scene');
    var node = document.createElement('a-entity');
    node.setAttribute('class', 'node graphElement');
    node.setAttribute('id', ID);
    console.log(pos_z)
    node.setAttribute('material', { color: pos_z == -5? "white": "#A9A9A9",
                                    side: 'double'
                                    });
    if (pos_z == -5) {
        node.setAttribute('cursor-listener', {});
    }
    node.setAttribute('position', {x: pos_x, y:pos_y, z:pos_z});
    node.setAttribute('geometry', {primitive: 'circle'});
    node.setAttribute('scale', {x: 0.9, y:0.25, z:2});
    node.setAttribute('text', {align: 'center',
    						   zOffset: 0.01, 
    						   color: 'black',
    						   font: 'https://cdn.aframe.io/fonts/Roboto-msdf.json',
    						   opacity: 1,
    						   side: 'double',
    						   value: name.replace("\n","\n\n"), 
    						   width: 8.9,
    						   wrapCount: 60.6,
    						   wrapPixels: 1500,
    						   zOffset: 0});
    

    scene.appendChild(node);
}

function create_line_entity(path, fromNode, toNode, z_index){
    var dx = path[path.length-1][0]-path[0][0]
    var dy = path[path.length-1][1]-path[0][1]
    console.log(`Angle-${Math.atan(dx/dy)*180/Math.PI   }`)

    // var fromNode = document.querySelector('#\\3' + node.id);
    // var toNode = document.querySelector('#\\3' + node.children[i].id);


    var scene = document.querySelector('a-scene');
    var edge = document.createElement('a-entity');
    

    var newEdge = document.createElement('a-plane');
    newEdge.setAttribute('material', { color: z_index == -5? "black": "#A9A9A9",
                                    side: 'double'
                                    });
    newEdge.setAttribute("class", "edge graphElement");
    newEdge.setAttribute('cursor-listener', {});
    newEdge.setAttribute('position', path[0]);
    newEdge.setAttribute('width', 0.1);
    newEdge.setAttribute('height', Math.sqrt(dx*dx + dy*dy));
    var middle = {
        z: z_index
    }
    if (path.length %2 == 0) {
        middle.x = (path[path.length/2][0] + path[path.length/2-1][0])/2,
        middle.y = (path[path.length/2][1] + path[path.length/2-1][1])/2
    }
    else{
        middle.x = path[Math.floor(path.length/2)][0],
        middle.y = path[Math.floor(path.length/2)][1]
    }
    newEdge.setAttribute('position', middle);
    console.log(path.length)
    newEdge.setAttribute('pathToFollow', path);

    newEdge.setAttribute('rotation', "0 0 " + (180-Math.atan(dx/dy) * 180/Math.PI));
	newEdge.setAttribute('id', dotIDtoMyID[fromNode] + '-' + dotIDtoMyID[toNode]);
    scene.appendChild(newEdge);


    // var stringPath = ""
    // for (var i = path.length - 1; i >= 0; i--) {
    //   stringPath += path[i][0] + ' ' + path[i][1] + ' ' + z_index;
    //   if (i!=0) {stringPath+=','}
    // }
    
    // edge.setAttribute("class", "edge graphElement");
    // edge.setAttribute('cursor-listener', {});
    // edge.setAttribute('meshline', { lineWidth: 36,
    //                                 path: stringPath,
    //                                 color: z_index == -5? "black": "#808080"
    //                                 });

    //scene.appendChild(edge);

}

// graph = JSON.parse('{"name":"root","children":[],"seconds":{"name":"seconds","value":0,"ref":"seconds","id":1,"children":[{"name":"map","value":1,"formula":["a+1","a"],"id":2,"ref":"mapVar","line":2,"children":[{"name":"map","value":2,"formula":["a+1","a"],"id":5,"ref":"map2","line":5,"children":[{"name":"merge","value":3,"formula":["mapVar","map2","+"],"id":6,"ref":"","line":6,"children":[],"parents":["mapVar","map2"]}],"parents":["mapVar"]},{"name":"merge","value":3,"formula":["mapVar","map2","+"],"id":6,"ref":"","line":6,"children":[],"parents":["mapVar","map2"]}],"parents":["seconds"]},{"name":"fold","value":0,"initValue":0,"formula":"currentValue+$$signalValue$$","id":3,"ref":"","line":3,"children":[],"parents":["seconds"]},{"name":"filter","value":"0","formula":["a%3==0","a"],"id":4,"ref":"","line":4,"children":[],"parents":["seconds"]}]}}')
// graphs = [graph,graph];

// resString = ""
// graphs.forEach(function (graph, index) {
// 	dotString = make_dot_file(graph);
// 	jsonGraph = get_json(dotString)
// 	// console.log(jsonGraph)
// 	resString += json_to_hml(JSON.parse(jsonGraph),index+1);
	
// })
// console.log(resString)