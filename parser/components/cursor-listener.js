AFRAME.registerComponent('cursor-listener', {
    init: function () {
        var visible = 0;
        var counter = 0;
        var menuElements = 
            {"node": [["fold", "+", "arg+1", "arg+5"], ["merge","-","arg-1","arg-5"],["map","*","","SAVE"],["filter","/","","DEL"]],
             "edge": [["DEL"]]
            };
        var COLORS = ['green','white'];
        this.el.addEventListener('click', function (evt) {
            counter ++;
            if (counter%2 == 1) {
                var randomIndex = Math.floor(Math.random() * COLORS.length);

                /* DISPLAY MENU */
                menuBackgroud = document.querySelector("#menu-backgroud");
                if(menuBackgroud == undefined){
                    this.setAttribute('material', 'color', COLORS[visible%COLORS.length]);
                    //console.log("Adding menu");
                    var sceneEl = document.querySelector('a-scene');
                    var menu = document.createElement('a-plane');
                    var menuBackgroud = document.createElement('a-plane');
                    menuBackgroud.setAttribute("id", "menu-backgroud")
                    menu.setAttribute("id", "menu")

                    menuBackgroud.setAttribute("material", " color: black");

                    menuBackgroud.setAttribute("height",2.15);
                    menuBackgroud.setAttribute("width",2.15);

                    menu.setAttribute("height",2.1);
                    menu.setAttribute("width",2.1);
                    var pos = this.getAttribute("position");
                    pos.x -= 2;
                    pos.z += 0.02;


                    menuPos = {
                      x: 0,
                      y: 0,
                      z: 0.01
                    }
                    menu.setAttribute('position',menuPos);
                    menuBackgroud.setAttribute("position",pos); 
                    var type = this.getAttribute("class")//here now if it's a node or an edge
                    for (var i = 0; i < menuElements[type].length; i++) {
                      for (var j = 0; j < menuElements[type][i].length; j++) {
                        var button = document.createElement('a-entity');
                        menu.appendChild(button);
                        button.setAttribute("geometry","primitive: plane; width: 0.4; height:0.4;")
                        button.setAttribute("class","menu-button");
                        button.setAttribute("text","color: white; zOffset: 0.02; align: center; width:2; height:2; value:"+menuElements[type][i][j]+";")

                        /*button.setAttribute("text", )*/
                        button.setAttribute("material", " color: #496FFF");
                        if (i*4+j == 15) {
                            button.setAttribute("material", " color: red");
                        }
                        else if (i == 4 ) {
                            button.setAttribute("material", " color: red");
                        }
                        //button.setAttribute("height",0.4);
                        //button.setAttribute("width",0.4);
                        newPos = {
                          x: -0.75 + (i*0.5),
                          y: 0.75 - (j*0.5),
                          z: 0.01
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
                                        console.log("I'm deleting",that.id);
                                        if (type == "node") {
                                            deleteNodeFromGraph(signalGraph,that.id);
                                            that.parentNode.removeChild(that);

                                            deleteEdgesForID(that.id);
                                        }
                                        // else{//edge
                                        //     deleteEdge(that)
                                        // }
                                        break;
                                    case "SAVE":
                                    console.log("SAVE")
                                        previousSignalGraphs.push(signalGraph);
                                        currentSignalGraph += 1;
                                        console.log(previousSignalGraphs)
                                        refresh();
                                        break;
            //TODO: Tiggered twice for some reason
                                    case "+":
                                    case "-":
                                    case "/":
                                    case "*":
                                        changeOperator(signalGraph, node, action);
                                        break;
                                    case "arg-1":
                                    case "arg+1":
                                    case "arg-5":
                                    case "arg+5":
                                        changeArgument(signalGraph, node, action.replace("arg",""));
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
                else{
                    menuBackgroud.parentNode.removeChild(menuBackgroud);
                }

                visible = 1 - visible;
                //console.log(counter);
                
            }
    });
  }
});

