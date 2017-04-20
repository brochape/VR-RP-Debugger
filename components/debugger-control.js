AFRAME.registerComponent('debugger-control', {
    init: function () {
        var counter = 0
        this.el.addEventListener("click", (evt) => {
            counter +=1;
            if (counter%2==1) {                
                switch (this.el.getAttribute('id')) {
                    case 'play':
                        this.el.emit('startDebugger')
                        break;
                    case 'pause':
                        this.el.emit('stopDebugger');
                        break;
                    case 'restart':
                        this.el.emit('restartDebugger');
                        break;
                }
            }
        })

    }
});

