AFRAME.registerComponent('cursor-listener', {
    init: function () {
        var visible = 0;
        var counter = 0;
        var COLORS = ['blue','white'];
        var menuElements = ["fold", "+", "-", "0", "merge","","","","map","","","","filter","","","DEL"]
        this.el.addEventListener('click', function (evt) {
            counter ++;
            //console.log("click");
            if (counter%2 == 1) {
                var randomIndex = Math.floor(Math.random() * COLORS.length);
                this.setAttribute('material', 'color', COLORS[visible%COLORS.length]);
                //console.log('I was clicked at: ', evt.detail.intersection.point);

                /* DISPLAY MENU */
                menu = document.querySelector("#menu");
                console.log(menu);
                if(menu == undefined){
                    console.log("Adding menu");
                    var sceneEl = document.querySelector('a-scene');
                    var menu = document.createElement('a-plane');
                    menu.setAttribute("id", "menu")

                    menu.setAttribute("height",2.1);
                    menu.setAttribute("width",2.1);
                    var pos = this.getAttribute("position");
                    pos.x -= 2;

                    for (var i = 0; i < 4; i++) {
                      for (var j = 0; j < 4; j++) {
                        var button = document.createElement('a-entity');
                        menu.appendChild(button);
                        menu.setAttribute("position",pos);
                        button.setAttribute("geometry","primitive: plane; width: 0.4; height:0.4;")
                        button.setAttribute("class","menu-button");
                        button.setAttribute("text","color: white; zOffset: 0.01; align: center; width:2; height:2; value:"+menuElements[i*4+j]+";")

                        /*button.setAttribute("text", )*/
                        button.setAttribute("material", " color: #496FFF");
                        if (i*4+j == 15) {
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
                        button.addEventListener('click',function (evt) {
                            var action = this.getAttribute('text').value;
                            switch(action){
                                case "DEL":
                                    console.log("I'm deleting",that.id);

                                    deleteNodeFromGraph(signalGraph,that.id);
                                    that.parentNode.removeChild(that);

                                    deleteEdgesForID(that.id);
                                    //TODO: delete all depending children?
                                    //TODO: Tiggered twice for some reason
                            }
                            // This works!
                            //
                        });
                        buttonPosition = button.setAttribute('position', newPos);
                        button.setAttribute('position', buttonPosition);
                        
                      }
                    }
                    
                    sceneEl.appendChild(menu);
                }
                else{
                    /*console.log("DELETE");*/
                    menu.parentNode.removeChild(menu);
                }

                visible = 1 - visible;
                //console.log(counter);
                
            }
    });
  }
});

