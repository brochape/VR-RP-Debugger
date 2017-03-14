AFRAME.registerComponent('cursor-listener', {
  	init: function () {
  		var i = 0;
    	var COLORS = ['red', 'green', 'blue'];
    	console.log(this);
    	this.el.addEventListener('click', function (evt) {
      		var randomIndex = Math.floor(Math.random() * COLORS.length);
      		this.setAttribute('material', 'color', COLORS[i%COLORS.length]);
      		i++;
      		//console.log('I was clicked at: ', evt.detail.intersection.point);

      		/* DISPLAY MENU */
            var sceneEl = document.querySelector('a-scene');
            var menu = document.createElement('a-plane');
            var button = document.createElement('a-plane');
            button.setAttribute("height",0.4);
            button.setAttribute("width",0.4);
            menu.setAttribute("height",2.1);
            menu.setAttribute("width",2.1);
            var pos = this.getAttribute("position");
            pos.x -= 2;
            button.setAttribute("color", "black")
            menu.appendChild(button);
            menu.setAttribute("position",pos);
            
            sceneEl.appendChild(menu);
            newPos = {
            	x: -0.75,
            	y: 0.75,
            	z: 0.01
            }
            buttonPosition = button.setAttribute('position', newPos);
            button.setAttribute('position', buttonPosition);
    });
  }
});