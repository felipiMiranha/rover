 canvas=document.getElementById('tela');
 ctx=canvas.getContext("2d");

 roverL=100;
 roverA=90;

 backgroundImage="mars.jpg";
 roverImage="rover.png";
 roverX=10;
 roverY=10;

 function add(){
    backgroundImageTag = new Image();
    backgroundImageTag.onload=fundo;
    backgroundImageTag.src=backgroundImage;

    roverImageTag= new Image();
    roverImageTag.onload=carregarRover
    roverImageTag.src=roverImage
     }



 function fundo(){
ctx.drawImage(backgroundImageTag,0,0,canvas.width,canvas.heigth);
 }

 function carregarRover(){
ctx.drawImage(roverImageTag,roverX,roverY,roverL,roverA)
 }

 

