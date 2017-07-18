AFRAME.registerComponent('cursor-listener', {
    init: function () {
        var visible = 0;
        this.isSelected = false;
        var counter = 0;
        var menuElements = 
            {
                "node": [["fold", "+", "arg+1", "arg+5"], ["merge","-","arg-1","arg-5"],["map","*","LOCAL\nBREAK","SAVE"],["filter","/","BREAK","DEL"]],
                "edge": [["DEL"]]
            };
        var COLORS = 
            {
                "node": ['green','white'],
                "edge": ['green','black']
            };

        this.el.addEventListener('click', function (evt) {
            var type = this.getAttribute("class").split(" ")[0]
            counter ++;
            if (counter%2 == 1) {
                document.querySelector('a-scene').querySelectorAll(".node").forEach(function (node) {
                    if (node.getAttribute('position').z == -5) {
                        node.setAttribute('material', 'color', "white");
                    }
                });
                document.querySelector('a-scene').querySelectorAll(".edge").forEach(function (edge) {
                    if (edge.getAttribute('position').z == -5) {
                        edge.setAttribute('material', 'color', "black");
                    }
                });

                this.setAttribute('material', 'color', COLORS[type][this.isSelected ? 1 : 0]);
                this.isSelected = ! this.isSelected;
                /* DISPLAY MENU */
                var menuBackgroud = document.querySelector("#menu-backgroud");
                if(menuBackgroud != undefined){
                    menuBackgroud.parentNode.removeChild(menuBackgroud);
                }
                if (this.isSelected) {

                    //console.log("Adding menu");
                    var sceneEl = document.querySelector('a-scene');
                    var menu = document.createElement('a-plane');
                    var menuBackgroud = document.createElement('a-plane');
                    var pos = this.getAttribute("position");

                    console.log();
                    if (type == "node") {
                        var nodeName = findNodeByID(signalGraph,this.id).ref;

                        if (nodeName) {
                            var nodeNameText = document.createElement('a-entity');

                            nodeNameText.setAttribute("geometry","primitive: plane; width: "+ 0.1*nodeName.length +"; height:0.2;")
                            nodeNameText.setAttribute("material", " color: black");
                            nodeNameText.setAttribute("text","color: white; zOffset: 0.02; align: center; width:3; height:1; value:" + nodeName+";")
                            menu.appendChild(nodeNameText);
                            nodeNamePos = {
                                x: 0,
                                y: 1.171,
                                z: 0.010
                            }
                            nodeNameText.setAttribute("position", nodeNamePos);

                        }
                        var selectedNode = findNodeByID(signalGraph,this.id)
                        console.log(selectedNode)
                        if (selectedNode) {
                            var nodeOperation = document.createElement('a-entity');
                            var formula = selectedNode.formula;
                            var operation = ' ';
                            switch (selectedNode.name) {
                                case "merge":
                                    operation = formula[2];
                                    break;
                                case "fold":
                                    console.log("fold");
                                    var temp = formula.split('$')[0]
                                    operation = temp[temp.length-1];
                                    break;
                                case "filter":
                                    operation = formula[0].replace(formula[1],'');
                                    break;
                                case "map":
                                    operation = formula[0].replace(formula[1],'');
                                    break;
                            }
                            var textToDisplay = "Operation: " + operation;
                            nodeOperation.setAttribute("geometry","primitive: plane; width: "+ 0.1*textToDisplay.length +"; height:0.2;")
                            nodeOperation.setAttribute("material", " color: black");
                            nodeOperation.setAttribute("text","color: white; zOffset: 0.02; align: center; width:3; height:1; value: "+ textToDisplay+";")
                            menu.appendChild(nodeOperation);
                            nodeNamePos = {
                                x: 0,
                                y: -1.171,
                                z: 0.010
                            }
                            nodeOperation.setAttribute("position", nodeNamePos);

                        }

                    }

                    menuBackgroud.setAttribute("id", "menu-backgroud")
                    menu.setAttribute("id", "menu")

                    menuBackgroud.setAttribute("material", " color: black");


                    menuBackgroud.setAttribute("height",menuElements[type].length*0.5+0.15);
                    menuBackgroud.setAttribute("width",menuElements[type][0].length*0.5+.15);

                    menu.setAttribute("height",menuElements[type].length*0.5+0.1);
                    menu.setAttribute("width",menuElements[type][0].length*0.5+.1);
                    if (type == "node") {
                        pos.x -= 2;
                    } else {
                        pos.x -= 1;
                    }
                    pos.z += 0.02;


                    menuPos = {
                      x: 0,
                      y: 0,
                      z: 0.01
                    }
                    menu.setAttribute('position',menuPos);
                    menuBackgroud.setAttribute("position",pos); 
                    for (var i = 0; i < menuElements[type].length; i++) {
                      for (var j = 0; j < menuElements[type][i].length; j++) {
                        var button = document.createElement('a-entity');
                        menu.appendChild(button);
                        button.setAttribute("geometry","primitive: plane; width: 0.4; height:0.4;")
                        button.setAttribute("class","menu-button");
                        button.setAttribute("text","color: white; zOffset: 0.02; align: center; width:2; height:2; value:" + menuElements[type][i][j]+";")

                        button.setAttribute("material", " color: #496FFF");
                        if (menuElements[type][i][j] == "DEL") {
                            button.setAttribute("material", " color: red");
                        }
                        else if (menuElements[type][i][j] == "BREAK") {
                            button.setAttribute("material", " color: blue");
                        }
                        else if (menuElements[type][i][j] == "LOCAL\nBREAK") {
                            button.setAttribute("material", " color: blue");
                        }
                        if (type == "node") {
                            newPos = {
                              x: -0.75 + (i*0.5),
                              y: 0.75 - (j*0.5),
                              z: 0.01
                            }
                        } else {
                            newPos = {
                              x: 0,
                              y: 0,
                              z: 0.01
                            }

                        }
                        var that = this;
                        var canModify = false;//avoid the doubletrigger
                        button.addEventListener('click',function (event) {
                            event.stopPropagation();
                            var action = this.getAttribute('text').value;
                            var node = findNodeByID(signalGraph, that.id);
                            canModify = !canModify;
                            if (canModify) {
                                switch(action){
                                    case "DEL":
                                        if (type == "node") {
                                            deleteNodeFromGraph(signalGraph,that.id);
                                            that.parentNode.removeChild(that);
                                            deleteEdgesForID(that.id, that.getAttribute("position").z);
                                        }
                                        else{
                                            deleteEdgeFromGraph(signalGraph, that.id)
                                            that.parentNode.removeChild(that);
                                        }
                                        menuBackgroud.parentNode.removeChild(menuBackgroud);
                                        break;
                                    case "BREAK":
                                        setBreakPointOn(signalGraph,node);
                                        break;
                                    case "LOCAL\nBREAK":
                                        setLocalBreakpointOn(node);
                                        break;
                                    case "SAVE":
                                        previousSignalGraphs[0] = signalGraph;
                                        previousSignalGraphs.unshift(signalGraph);
                                        currentSignalGraph += 1;
                                        refreshScene();
                                        break;
                                    case "+":
                                    case "-":
                                    case "/":
                                    case "*":
                                        changeOperation(signalGraph, node, action);
                                        break;
                                    case "arg-1":
                                    case "arg+1":
                                    case "arg-5":
                                    case "arg+5":
                                        changeArgument(signalGraph, node, action.replace("arg",""));
                                        break;
                                    case "fold":
                                    case "map":
                                    case "merge":
                                    case "filter":
                                        changeOperator(signalGraph, node, action);  
                                        break;
                                }
                            }
                        });
                        buttonPosition = button.setAttribute('position', newPos);
                        button.setAttribute('position', buttonPosition);
                        
                      }
                    }
                    
                    menuBackgroud.appendChild(menu);
                    sceneEl.appendChild(menuBackgroud);
                }
            }
                
            
    });
  }
});

