function findNodeByID(signalGraph, ID) {
    function searchInNode(node, ID) {
        //console.log(node);
        if (node.id == ID) {
            console.log(node);
            return node;
        }
        else if (node.children) {
            var i;
            var result = null;
            for(i = 0; result == null && i < node.children.length; i++){
                result = searchInNode(node.children[i], ID);
           }
           return result;
        }
        return null;
    }
    var i;
    var result = null;
    var keys = Object.keys(signalGraph);
    for (i = 0; result == null && i < keys.length; i++){
        // //console.log(signalGraph);
        if (signalGraph[keys[i]].id ==ID ) {
            result = signalGraph[keys[i]];
        }
        else{
            result = searchInNode(signalGraph[keys[i]], ID);
        }
    }
    return result;
}

function delete_flowing_values() {


    var flowing = document.querySelectorAll(".flowingText");
    ////console.log(flowing[flowing.length - 1],flowing[flowing.length - 1].getAttribute('scale'));
    for (var i = 0; i < flowing.length-1; i++) {
        //console.log(flowing[i].attributes);
        ////console.log(flowing[i])
        try{
            var pathArray = flowing[i].getAttribute('alongpath').path.split(' ');
            ////console.log("bib");
            var destination = pathArray[pathArray.length - 1].split(",");
            ////console.log(destination);// Array os destination pos
            var currentPos = flowing[i].getAttribute('position');
            var currentPosArray = [currentPos.x,currentPos.y,currentPos.z];
            if (close_enough_2D(currentPosArray, destination)) {
                flowing[i].parentNode.removeChild(flowing[i]);
            }
        }
        catch(err){
            
        }
        ////console.log(currentPos);
    }
}

function deleteEdgesForID(ID) {
    var edges = document.querySelectorAll(".edge");
    console.log(edges);
    for (var i = 0; i < edges.length; i++) {
        edge = edges[i];
        console.log(edge);
        [fromNodeID,toNodeID] = edge.id.split('-');
        console.log(fromNodeID,toNodeID);
        if (fromNodeID == ID || toNodeID == ID){
            edge.parentNode.removeChild(edge);
        }
    }
}
