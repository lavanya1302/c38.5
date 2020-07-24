var canvas, backgroundImage;
var hurdle;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var trackImage,car1Image,car2Image,car3Image,car4Image;
var cars, car1, car2, car3, car4,hurdle;
function preload(){
  trackImage=loadImage("../images/track.jpg");
  runner1Image=loadImage("../images/runner1.png");
  runner2Image=loadImage("../images/runner2.png");
  runner3Image=loadImage("../images/runner3.png");
  runner4Image=loadImage("../images/runner4.png");
  groundImage=loadImage("../images/ground.png");
  hurdele1Image=loadImage("../images/hurdle1.png")
  hurdele2Image=loadImage("../images/hurdle2.png")
  hurdele3Image=loadImage("../images/hurdle3.png")
  hurdele4Image=loadImage("../images/hurdle4.png")
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  };
}
