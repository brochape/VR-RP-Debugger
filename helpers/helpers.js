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
    // console.log(signalGraph);
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

function findNodeByRef(signalGraph, reference) {
    function searchInNode(node, reference) {
        //console.log(node);
        if (node.ref == reference) {
            return node;
        }
        else if (node.children) {
            var i;
            var result = null;
            for(i = 0; result == null && i < node.children.length; i++){
                result = searchInNode(node.children[i], reference);
           }
           return result;
        }
        return null;
    }
    var i;
    var result = null;
    // console.log(signalGraph);
    var keys = Object.keys(signalGraph);
    for (i = 0; result == null && i < keys.length; i++){
        // //console.log(signalGraph);
        if (signalGraph[keys[i]].ref ==reference ) {
            result = signalGraph[keys[i]];
        }
        else{
            result = searchInNode(signalGraph[keys[i]], reference);
        }
    }
    return result;
}

function printf(nodeName){
    
    var signal = findNodeByRef(signalGraph, nodeName);
    var value = signal.value;
    console.log(nodeName+": "+ value);
}

function deleteEdgesForID(ID, z_level) {
    var edges = document.querySelectorAll(".edge");
    // console.log(edges);
    // edges = edges.filter((edge)=>{return edges.getAttribute('class').includes(z_level.toString())});

    for (var i = 0; i < edges.length; i++) {
        edge = edges[i];
        if (edge.getAttribute('class').includes(z_level.toString())) {
            [fromNodeID,toNodeID] = edge.id.split('-');
            if (fromNodeID == ID || toNodeID == ID){
                edge.parentNode.removeChild(edge);
            }
        }
    }
}

function deleteEdgewithID(ID) {
    var edgeToDelete = document.querySelectorAll("#\\3" + ID);
    for (var i = edgeToDelete.length - 1; i >= 0; i--) {
        var edge = edgeToDelete[i];
        if (edge.getAttribute('class').includes((-5).toString())) {
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
        var editor = $('.CodeMirror')[0].CodeMirror;

        var code = editor.getValue();
        var previousCode = code.split('\n')[node.line-1];
        console.log("test");
        editor.setValue(code.replace(previousCode,""));
    }

}

function deleteEdgeFromGraph(signalGraph, edgeID) {
    console.log("Deleting: ", edgeID);
    deleteEdgewithID(edgeID)
    [toNodeID, fromNodeID] = edgeID.split(/-/).map((elem) => parseInt(elem));
    fromNode = findNodeByID(signalGraph, fromNodeID);
    console.log(fromNode.children.length);
    newChildren = fromNode.children.slice();
    for(i = 0; i < fromNode.children.length; i++){
        if (fromNode.children[i].id == toNodeID){
            indexToDelete = i;
        }
    }
    console.log("index:",indexToDelete)
    fromNode.children.splice(indexToDelete,1);
    console.log(fromNode.children);
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
            var editor = $('.CodeMirror')[0].CodeMirror;

            var code = editor.getValue();
            var previousCode = code.split('\n')[node.line-1];
            console.log(previousCode, initVal.toString(),node.initValue);
            var newCode = previousCode.replace(initVal.toString(),node.initValue);
            editor.setValue(code.replace(previousCode,newCode));
            break;

        case "map":
            [body,param] = node.formula;
            var newBody = body.split(/\+|\/|\-|\*/g);
            var oldArg = newBody[newBody.length - 1];
            var newArg = eval(oldArg + operation);
            newBody = body.replace(oldArg,newArg) ;
            node.formula = [newBody,param];// Value automatically updated at first computation of the formula
            console.log("Node formula: ",node.formula)

            var editor = $('.CodeMirror')[0].CodeMirror;

            var code = editor.getValue();
            var previousCode = code.split('\n')[node.line-1];
            var newCode = previousCode.replace(oldArg,newArg);
            editor.setValue(code.replace(previousCode,newCode));
            break;
        case "filter"://TODO: this is "hardcoded"
            [body,param] = node.formula;
            var newBody = body.split(/\>\=|\%|\!\=|\<\=|\=\=|\>|\<|\=/g);
            var oldArg = newBody[1];
            var newArg = eval(oldArg + operation);
            newBody = body.replace(oldArg,newArg) ;
            node.formula = [newBody,param];// Value automatically updated at first computation of the formula
            console.log("Node formula: ",node.formula)
            
            var editor = $('.CodeMirror')[0].CodeMirror;

            var code = editor.getValue();
            var previousCode = code.split('\n')[node.line-1];
            var newCode = previousCode.replace(oldArg,newArg);
            editor.setValue(code.replace(previousCode,newCode));
            break;



    }
    

}

function changeOperation(signalGraph, node, operation){
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
            break;

        case "merge":
            node.formula[2] = operation;
            break;

    }
    if (node.name != "filter") {
        var editor = $('.CodeMirror')[0].CodeMirror;

        var code = editor.getValue();
        // console.log(code.innerHTML);
        //activate seconds<br>var mapVar = map( (a)=&gt;(a+1) seconds)<br>fold(seconds + 0)<br>filter((a)=&gt;(a%3==0) seconds 0)<br>var map2 = map((a)=&gt;(a+1) mapVar)<br>merge(mapVar map2 +)
        var previousCode = code.split('\n')[node.line-1];
        var newCode = previousCode.replace(/\+|\/|\-|\*/g,operation);
        editor.setValue(code.replace(previousCode,newCode));
    }

}

function changeOperator(signalGraph, node, newOperation) {
        var editor = $('.CodeMirror')[0].CodeMirror;
        console.log(editor)

        var code = editor.getValue();
        var splitCode = code.split('\n')
        var previousLine = splitCode[node.line-1];
        [leftPart,rightPart] = previousLine.split("=");//ERROR FOR THE FILTER WITH "=" in their lambda
        var newLine = "";
        console.log(rightPart)
        if (rightPart){
            newLine = leftPart + " = "
        }

        switch (node.name){
            case newOperation:
                newLine = previousLine;
                break;
            case "merge":// 2 dependencies -> 1
                var parentNode = findSignalNode(signalGraph,node.parents[0]);
                var array = parentNode.children;
                deleteEdgewithID(node.id + "-" + parentNode.id)
                var index = -1;
                for (var i = array.length - 1; i >= 0; i--) {
                    if (array[i].id == node.id)
                        index = i;
                }

                if (index > -1) {
                    array.splice(index, 1);
                }
                node.parents = [node.parents[1]]
                parentNode.children = array;

            default:
                switch (newOperation){
                    case "fold":
                        var operation = "+";
                        node.formula =  "currentValue "+ operation +" $$signalValue$$" ;
                        node.value = 0;
                        node.name = newOperation;
                        newLine += (node.name + '(' + node.parents[0] + ' ' + operation + ' ' + node.value + ')')
                        break;

                    case "filter":
                        var param = "x";
                        var body = "x%1 == 0"
                        node.formula = [body,param];
                        node.value = 0;
                        node.name = newOperation;
                        newLine += (node.name + "((" + param +') => {'+ body+ '} ' + node.parents[0] + node.value + ')')
                        break;

                    case "map":
                        var param = "x";
                        var body = "x + 1"
                        node.formula = [body,param];
                        node.value = 0;
                        node.name = newOperation;
                        newLine += (node.name + "((" + param +') => {'+ body+ '} ' + node.parents[0] + ')')
                        break;
                }
                splitCode[node.line-1] = newLine;
                editor.setValue(splitCode.join('\n'));

                break;


        }
}

function reset_graph(startNode){
    // console.log(node.kids);
    startNode.value = startNode.initValue;
    if (startNode.children != undefined) {
        for (var i = startNode.children.length - 1; i >= 0; i--) {
            reset_graph(startNode.children[i]);
        }
    }
}

function setBreakPointOn(signalGraph,node) {
    node.globalBreakpoint = !node.globalBreakpoint;
}


function setLocalBreakpointOn(node) {
    node.localBreakpoint = !node.localBreakpoint;
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

