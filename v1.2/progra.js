var canvas = document.getElementById("cuadro");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(150, 30, 20, 0, 2 * Math.PI);
ctx.lineTo(150, 60, 20, 3);
ctx.moveTo(150, 30, 20, 3);
ctx.stroke();