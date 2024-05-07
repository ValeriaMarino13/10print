let x= 0;
let y= 0;

function setup() { 
  createCanvas (windowWidth,windowHeight);
  background (0, 90,90);
  } 

function draw() {
  stroke (20,0,0);
  strokeWeight (3);
  ellipseMode (CORNER);
  ellipse (x,y,50);
  
  x=x + 70;
  
  if(x > windowWidth) {
    x=0;
    y=y + 50;
    }
  }