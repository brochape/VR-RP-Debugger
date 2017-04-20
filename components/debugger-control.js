AFRAME.registerComponent('debugger-control', {
    init: function () {
        var counter = 0
        this.el.addEventListener("click", (evt) => {
            counter +=1;
            if (counter%2==1) {
                console.log(this.el.getAttribute('id'))
                
                switch (this.el.getAttribute('id')) {
                    case 'play':
                        this.el.emit('startDebugger')
                        break;
                    case 'pause':
                        this.el.emit('stopDebugger');
                        break;
                    case 'restart':
                        break;
                    default:
                        // statements_def
                        break;
                }
            }
        })

    }
});

