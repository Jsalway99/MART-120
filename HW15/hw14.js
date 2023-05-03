// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

var shape1, shape2;
function setup() {
    createCanvas(500, 600);
   // create the object
     rectangleObject = new Rectangle(40,60,40,60,50,40,200)
     squareObject = new Square(100,23,45,80,25,30,10)
    createCharacter(200, 350);
}

function draw() {
  background(130,5,78);
  stroke(0);
  fill(0);

  // call createBorders function 
  createBorders(10);

  // exit message
  textSize(16);
  text("Goal", width-50,height-50)

  //createCharacter(200,350);
  drawcharacter();
  characterMovment();


  //potential enemy
  fill(13,145,14);
 
    rectangleObject.display();
    squareObject.display();
    //check to see if the charater has left the exit
  if(characterX > width && characterY > width - 50) {
    fill(0);
    stroke(5);
    textSize(26);
    text("You Win!", width/2-50, height/2-50);
  }
   //create the shape based on the mouse click
  fill(120,130,140);
  circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovment() {
 //handle the keys 
 if(keyIsDown(w)) {
   characterY -= 10;
 }
 if(keyIsDown(s)) {
   characterY += 10;
 }
 if(keyIsDown(a)) {
   characterX -= 10;
   console.log("movement: " + characterX);
 }
 if(keyIsDown(d)) {
   characterX += 10;
 }
}

function createCharacter(x,y) {
  charaterX = x;
  character = y;
}

function drawcharacter() {
    fill(23, 40,123);
    circle(characterX, characterY, 25)
}

function createBorders(thickness) {
 // top border
 rect(0,0,width,thickness);
 // left border
 rect(0,0,thickness,height);
 // bottom border
 rect(0, height-thickness,width, thickness);
 // right border
 rect(width-thickness,0,thickness,height-50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}