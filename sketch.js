var canvas;
var backgroundImage;
var bgImg;
var database;

var myform, myplayer, mygame;
var myPlayerCount, myGamestate;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // initializing the database
  database = firebase.database();

  mygame = new Game();
  mygame.start();
  mygame.getGameState();
}

function draw() {
  background(backgroundImage);

  // when 2 player joined the game
  if (myPlayerCount === 2) {
    mygame.updateGameState(1);
  }
  if (myGamestate === 1) {
    mygame.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
