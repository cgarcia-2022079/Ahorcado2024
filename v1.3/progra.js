var canvas = document.getElementById("cuadro");
var ctx = canvas.getContext("2d");

ctx.beginPath();
//Cabeza
ctx.arc(150, 30, 20, 0, 2 * Math.PI);
//Torso
ctx.moveTo(150, 50, 10, 10);
ctx.lineTo(150, 90, 150, 90);
//Brazo izquierdo
ctx.moveTo(150, 60, 10, 10);
ctx.lineTo(120, 70, 10, 10);
//Brazo derecho
ctx.moveTo(150, 60, 10, 10);
ctx.lineTo(180, 70, 10, 10);
//Pierna izquierda
ctx.moveTo(150, 90, 150, 90);
ctx.lineTo(120, 120, 10, 10);
//Pierna derecha
ctx.moveTo(150, 90, 150, 90);
ctx.lineTo(180, 120, 10, 10);

ctx.moveTo(100, 0, 10, 10);
ctx.lineTo(100, 100, 10, 10);
ctx.stroke();