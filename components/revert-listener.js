AFRAME.registerComponent('revert-listener', {
    init: function () {
        var counter = 0;
        this.el.addEventListener('click', () => {
            counter ++;
            // console.log(this);
            var type = this.el.getAttribute("class").split(" ")[0]
            var sceneEl = document.querySelector('a-scene');
            if (counter%2 == 1) {
                var revertMenuBackgroud = document.querySelector("#menu-revert-backgroud");
                if(revertMenuBackgroud != undefined){
                    console.log(revertMenuBackgroud)
                    revertMenuBackgroud.parentNode.removeChild(revertMenuBackgroud);
                }
                var revertMenuBackgroud = document.createElement('a-plane');
                var revertMenu = document.createElement('a-plane');   
                revertMenuBackgroud.setAttribute("id", "menu-revert-backgroud");
                revertMenu.setAttribute("id", "revertMenu");

                revertMenuBackgroud.setAttribute("material", " color: black");

                var menuHeight = 0.6;
                var menuWidth = 0.6;

                revertMenuBackgroud.setAttribute("height" , menuHeight + 0.05);
                revertMenuBackgroud.setAttribute("width", menuWidth + 0.05);

                revertMenu.setAttribute("height",menuHeight);
                revertMenu.setAttribute("width",menuWidth);
                var pos = this.el.getAttribute("position");

                // console.log("Pos", pos);
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
                newPos = {
                  x: 0,
                  y: 0,
                  z: 0.01
                }
                revertMenu.setAttribute('position',menuPos);
                revertMenuBackgroud.setAttribute("position",pos); 
                var button = document.createElement('a-entity');
                revertMenu.appendChild(button);
                button.setAttribute("geometry","primitive: plane; width: 0.4; height:0.4;")
                button.setAttribute("class","revertMenu-button");
                button.setAttribute("text","color: white; zOffset: 0.02; align: center; width:2; height:2; value: Revert;")

                button.setAttribute("material", " color: #496FFF");
                button.setAttribute('position', newPos);    

                revertMenuBackgroud.appendChild(revertMenu);
                sceneEl.appendChild(revertMenuBackgroud);
                button.addEventListener('click', () => {
                    revertMenuBackgroud.parentNode.removeChild(revertMenuBackgroud);
                    console.log(previousSignalGraphs);
                    var index = (5 - this.el.getAttribute("position").z)/8 -1;
                    console.log(Math.round(index));
                    previousSignalGraphs = previousSignalGraphs.slice(Math.round(index));
                    console.log("Length", previousSignalGraphs.length);
                    refreshScene();
                })


            }
                                                 
        })

    }
});

