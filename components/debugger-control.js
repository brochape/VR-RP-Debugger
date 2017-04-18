AFRAME.registerComponent('debugger-control', {
    init: function () {
        this.el.addEventListener("click", () => console.log("coucou"))
    }
});

