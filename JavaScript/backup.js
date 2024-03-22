//backup

// Controles
const TO_LEFT = 65; // A
const TO_RIGHT = 68; // D
const RUN = 82; // R

const CANVAS_X = 400;
const CANVAS_Y = 400;

var char_X = 50;
var char_Y = 50;

var speed = 10;

function terrain(){
  let alturaTerreno = CANVAS_Y*(10/12);
  
  line(0, alturaTerreno, CANVAS_X, alturaTerreno);
}

function moveCharacter() {
  if (keyIsDown(TO_LEFT)) {
    char_X -= speed;
  }
  if (keyIsDown(TO_RIGHT)) {
    char_X += speed;
  }
  if (keyIsDown(RUN)) {
    speed = 20;
  }
  
}

function drawCharacter(){
  rect(0, CANVAS_Y*(37/48), 50, 50);
}

function setup() {
  createCanvas(CANVAS_X, CANVAS_Y);
  rectMode(CENTER);
}

function draw() {
  background(220);
  terrain();
  drawCharacter();
  moveCharacter();
}
