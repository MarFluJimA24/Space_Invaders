var myGameNave;

//creamos las variables de los objectos que usaremos
function startGame(){
    myGameArea.start();
    myGamePiece = new navePlayer1(30,30, "pink", 800, 750);
    myGamePiece = new navePlayer2(30, 30, "green", 600, 750);
}

//con esta funcion hacemos la creación del canvas
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function(){
        this.canvas.width = 1600;
        this.canvas.height = 870;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

//instanciamos la nave 1
function navePlayer1 (width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    context = myGameArea.context;
    context.fillStyle = color;
    context.fillRect(this.x, this.y, this.width, this.height);
}
//instanciamos la nave 2
function navePlayer2 (width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    context = myGameArea.context;
    context.fillStyle = color;
    context.fillRect(this.x, this.y, this.width, this.height);
}

