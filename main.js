canvas = document.getElementById('tela');
ctx = canvas.getContext("2d");
arrayimagens = ["mars.jpg", "marte1.jpeg", "marte2.jpeg", "marte3.jpeg", "marte4.jpeg"]
randomNumber = Math.floor(Math.random() * 5)
console.log(randomNumber)

roverL = 100;
roverA = 90;

backgroundImage = arrayimagens[randomNumber];
console.log("A imagem carregada é " + backgroundImage)
roverImage = "rover.png";
roverX = 10;
roverY = 10;

function add() {
    backgroundImageTag = new Image();
    backgroundImageTag.onload = fundo;
    backgroundImageTag.src = backgroundImage;

    roverImageTag = new Image();
    roverImageTag.onload = carregarRover
    roverImageTag.src = roverImage
}



function fundo() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);
}

function carregarRover() {
    ctx.drawImage(roverImageTag, roverX, roverY, roverL, roverA)
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if (keyPressed == '38') {
        up();
        console.log("cima")
    }

    if (keyPressed == '40') {
        down();
        console.log("baixo")
    }

    if (keyPressed == '39') {
        right();
        console.log("direita")
    }

    if (keyPressed == '37') {
        left();
        console.log("esquerda")
    }


}

function up() {
    if (roverY >= 0) {
        roverY = roverY - 10;
        console.log("Quando seta para cima é pressionada ,x= " + roverX + " e Y= " + roverY)
        fundo();
        carregarRover();
    }
}

function down() {
    if (roverY <= 500) {
        roverY = roverY + 10;
        console.log("Quando seta para cima é pressionada ,x= " + roverX + " e Y= " + roverY)
        fundo();
        carregarRover();
    }
}

function left() {
    if (roverX >= 0) {
        roverX = roverX - 10;
        console.log("Quando seta para cima é pressionada ,x= " + roverX + " e Y= " + roverY)
        fundo();
        carregarRover();
    }
}

function right() {
    if (roverX <=500) {
        roverX = roverX + 10;
        console.log("Quando seta para cima é pressionada ,x= " + roverX + " e Y= " + roverY)
        fundo();
        carregarRover();
    }
}

