
var redColor = 123;
var greenColor = 39;
var blueColor = 21;

var x = 100;
var y = 200;
var diameter = 50;

var movement = 50;

function setup() {
    createCanvas(400,400);
    movement = floor(random() * 10) +1;
  }
  
  function draw() {
    background(redColor,greenColor,blueColor);
    // head
    fill(255);
    circle(x,y,diameter)
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >=418 || headX<= 82)
  {
    headDirection *= -1;
  }
    circle(50,50,50);
    rect(30,70,50,80);
    triangle(30, 45, 48, 50, 46, 45);
    //arms
    line(30, 75, 55, 95);
    line(100,50,50,150);
    //hands
    ellipse(60,100,20);
    ellipse(80,100,20);
    point(40,105);
    circle(60,95,10);
    //body 
    square(30,body Y 200,15)
    body
    triangle(50,150,100,200,150,150)
    //legs
    rect(60,150,20,60)
    rect(20,150,20,60)
    text('jonathon salway',150,30)
    if(x >= 800 || x <= 0)
    {
        movement*=-1;
    }
  
        x += movement;
  }