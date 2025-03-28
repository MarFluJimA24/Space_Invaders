//creamos las variables de los objectos que usaremos
var navePlayer1, navePlayer2;

//Creamos los objetos
function startGame() {
    myGameArea.start();
    navePlayer1 = new component(30, 30, "pink", 1000, 750);
    navePlayer2 = new component(30, 30, "green", 600, 750);
}

//con esta funcion hacemos la creación del canvas
var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 1600;
        this.canvas.height = 870;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown")
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown")
        })

    },
    clear: function () { 
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

//instanciamos los objetos
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
        context = myGameArea.context;
        context.fillStyle = color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function () {
        this.x += this.speedX;
    }
}
function updateGameArea() {
    myGameArea.clear();
    navePlayer1.speedX = 0;
    if (myGameArea.keys && myGameArea.keys[65]){navePlayer1.speedX = -5;}
    if (myGameArea.keys && myGameArea.keys[68]){navePlayer1.speedX = 5;}
    navePlayer1.newPos();
    navePlayer1.update();
}






