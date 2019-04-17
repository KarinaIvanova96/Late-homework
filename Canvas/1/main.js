window.addEventListener("load", init, false);

function init() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    for (var i = 0; i < canvas.width; i += 25) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, canvas.height);
        context.stroke();
    }

    for (var i = 0; i < canvas.height; i += 25) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(canvas.width, i);
        context.stroke();
    }
}
