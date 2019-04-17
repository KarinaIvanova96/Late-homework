window.addEventListener('load', init, false);

function init() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.strokeStyle="rgba(#333)";
    context.beginPath();
    context.moveTo(50,50);
    context.bezierCurveTo(95, 110, 220, 25, 250, 50);
    context.lineTo(250, 200);
    context.bezierCurveTo(245, 165, 85, 245, 50, 200);
    context.closePath();
    context.stroke();

    context.strokeStyle="white";
    context.fillStyle = "red";
    context.beginPath();
    context.moveTo(50,50);
    context.bezierCurveTo(85, 82, 95, 57, 100, 79);
    context.lineTo(100, 209);
    context.bezierCurveTo(100, 215, 65, 220, 50, 200);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(200,47);
    context.bezierCurveTo(200, 57, 228, 35, 250, 50);
    context.lineTo(250, 200);
    context.bezierCurveTo(200, 186, 200, 200, 200, 196);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(151, 77);
    context.lineTo(159, 91);
    context.lineTo(165, 87);
    context.lineTo(162, 113);
    context.lineTo(173, 99);
    context.lineTo(176, 106);
    context.lineTo(188, 101);
    context.lineTo(184, 117);
    context.lineTo(190, 119);
    context.lineTo(169, 141);
    context.lineTo(171, 149);
    context.lineTo(152, 149);
    context.lineTo(152, 174);
    context.lineTo(149, 174);
    context.lineTo(149, 149);
    context.lineTo(129, 156);
    context.lineTo(131, 148);
    context.lineTo(110, 133);
    context.lineTo(116, 128);
    context.lineTo(112, 113);
    context.lineTo(123, 115);
    context.lineTo(129, 107);
    context.lineTo(137, 118);

    context.lineTo(134, 93);
    context.lineTo(143, 95);
    context.lineTo(151, 77);
    context.closePath();
    context.fill();
    context.stroke();
}