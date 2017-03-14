AFRAME.registerComponent('cursor-listener', {
    init: function () {
        var visible = 0;
        var counter = 0;
        var COLORS = ['blue','white'];
        this.el.addEventListener('click', function (evt) {
            counter ++;
            console.log("click");
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
                        var button = document.createElement('a-plane');
                        menu.appendChild(button);
                        menu.setAttribute("position",pos);
                        button.setAttribute("class","menu-button");
                        button.setAttribute("color", "black")
                        button.setAttribute("height",0.4);
                        button.setAttribute("width",0.4);
                        newPos = {
                          x: -0.75 + (i*0.5),
                          y: 0.75 - (j*0.5),
                          z: 0.01
                        }
                        this.addEventListener('click',function (evt) {
                            
                        })
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
                console.log(counter);
                
            }
    });
  }
});
