//on recupère le canvas dans la variable c
var c=document.getElementById('maison');
//on recupère le contect dans la variable ctx
var ctx=c.getContext('2d');
//ciel
var sky=ctx.createLinearGradient(200,0,200,400);
sky.addColorStop(0,'white');
sky.addColorStop(1,'blue');
ctx.fillStyle = sky;
ctx.fillRect(0,0,400,400);
//herbe
ctx.fillStyle = "olivedrab";
ctx.fillRect(0,320,400,80);
//murs de la maison
ctx.fillStyle = "#a0d7e6";
ctx.fillRect(100,200,200,150);
//ombre de la maison
ctx.fillStyle = "olive"
ctx.fillRect(100,350,200,40);
//fenetre gauche
ctx.fillStyle = "#c9c9c9";
ctx.fillRect(120,240,40,40);
//fenetre droite
ctx.fillRect(240,240,40,40);
//porte
ctx.fillRect(180,290,40,60);
//poignée de porte
ctx.fillStyle = "#d88437";
ctx.fillRect(210,325,5,5);
//cheminée
ctx.fillStyle = "red";
ctx.fillRect(250,130,30,50);
//toit
ctx.strokeStyle = "#d88437";
ctx.moveTo(100,200);
ctx.lineTo(200,100);
ctx.stroke();
ctx.lineTo(299,200);
ctx.stroke();
ctx.fillStyle = "#d88437";
ctx.fill();
//boite aux lettres
ctx.fillStyle = "red";
ctx.fillRect(320,290,40,20);
ctx.fillStyle = "grey";
ctx.fillRect(335,310,10,40);
ctx.fillStyle = "olive";
ctx.fillRect(335,350,10,10);
ctx.fillRect(320,360,40,10);
//soleil
ctx.beginPath();
ctx.arc(60,60,40,0,Math.PI*2,true);
ctx.fillStyle = "yellow";
ctx.fill();
//fummée
ctx.beginPath();
ctx.fillStyle = "lightgrey";
ctx.arc(280,100,15,0,Math.PI*2,true);
ctx.arc(300,80,20,0,Math.PI*2,true);
ctx.arc(330,60,30,0,Math.PI*2,true);
ctx.fill();
