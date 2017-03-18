function findNodeByID(signalGraph, ID) {
    function searchInNode(node, ID) {
        //console.log(node);
        if (node.id == ID) {
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
    for (var i = 0; i < edges.length; i++) {
        edge = edges[i];
        [fromNodeID,toNodeID] = edge.id.split('-');
        if (fromNodeID == ID || toNodeID == ID){
            edge.parentNode.removeChild(edge);
        }
    }
}


function deleteNodeFromGraph(signalGraph,nodeID) {
    var node = findNodeByID(signalGraph,nodeID);
    if (node) {
        for (var i = 0; i < node.parents.length; i++) {
            var parentNode = findSignalNode(signalGraph,node.parents[i]);
            var array = parentNode.children;
            var index = array.indexOf(node);
            if (index > -1) {
                array.splice(index, 1);
            }
            parentNode.children = array;
            
        }
        var code = document.querySelector(".codeEditor");
        console.log(code.innerHTML);
        //activate seconds<br>var mapVar = map( (a)=&gt;(a+1) seconds)<br>fold(seconds + 0)<br>filter((a)=&gt;(a%3==0) seconds 0)<br>var map2 = map((a)=&gt;(a+1) mapVar)<br>merge(mapVar map2 +)
        var previousCode = code.innerHTML.split('<br>')[node.line-1] 
        code.innerHTML = code.innerHTML.replace(previousCode,"");
        console.log(node.line)
    }

}
function changeArgument(signalGraph, node, operation){
    switch(node.name){
        case "fold":
            var initVal = node.initValue;
            node.initValue = eval(initVal + operation); 
            var parentValue = findSignalNode(signalGraph,node.parents[0]).value// TODO: THIS ONLY WORKS FOR A SECOND- based signal
            var newValue = [...Array(parentValue+1).keys()].reduce(function (acc, val) {
                return eval(acc + operation + val) ;
            }, node.initValue);
            node.value = newValue;
            break;

        case "map":
            [body,param] = node.formula;
            var newBody = body.split(/\+|\/|\-|\*/g);
            var oldArg = newBody[newBody.length - 1];
            var newArg = eval(oldArg + operation);
            newBody = body.replace(oldArg,newArg) ;
            node.formula = [newBody,param];// Value automatically updated at first computation of the formula
            console.log("Node formula: ",node.formula)
            break;
        case "filter"://TODO: this is "hardcoded"
            [body,param] = node.formula;
            var newBody = body.split(/\>\=|\%|\<\=|\=\=|\>|\<|\=/g);
            var oldArg = newBody[1];
            var newArg = eval(oldArg + operation);
            newBody = body.replace(oldArg,newArg) ;
            node.formula = [newBody,param];// Value automatically updated at first computation of the formula
            console.log("Node formula: ",node.formula)
            break;



    }
    

}

function changeOperator(signalGraph, node, operation){
    switch(node.name){
        case "fold":
            var parentValue = findSignalNode(signalGraph,node.parents[0]).value// TODO: THIS ONLY WORKS FOR A SECOND- based signal
            var newValue = [...Array(parentValue+1).keys()].reduce(function (acc, val) {
                return eval(acc + operation + val);
            }, node.initValue);
            node.value = newValue;
            node.formula = node.formula.replace(/\+|\/|\-|\*/g,operation)
            break;

        case "map":
            [body,param] = node.formula;
            var newBody = body.replace(/\+|\/|\-|\*/g,operation);
            node.formula = [newBody,param];// Value automatically updated at first computation of the formula
            console.log("Node formula: ",node.formula)
            break;

    }
    var editor = $('.CodeMirror').CodeMirror;

    var code = editor.getValue();
    // console.log(code.innerHTML);
    //activate seconds<br>var mapVar = map( (a)=&gt;(a+1) seconds)<br>fold(seconds + 0)<br>filter((a)=&gt;(a%3==0) seconds 0)<br>var map2 = map((a)=&gt;(a+1) mapVar)<br>merge(mapVar map2 +)
    var previousCode = code.split('\n')[node.line-1];
    var newCode = previousCode.replace(/\+|\/|\-|\*/g,operation);
    editor.setValue(code.replace(previousCode,newCode));
}

var decodeEntities = (function() {
  // this prevents any overhead from creating the object each time
  var element = document.createElement('div');

  function decodeHTMLEntities (str) {
    if(str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }

    return str;
  }

  return decodeHTMLEntities;
})();