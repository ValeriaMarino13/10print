//https://www.youtube.com/watch?v=bEyTZ5ZZxZs

let x= 0;
let y= 0; 
let spacing=50;

function setup ()  { 
  createCanvas(windowWidth,windowHeight);
  background (255, 100, 255);
  }

function draw() {
  
  strokeCap(ROUND); 
  
  if ((random(3) < 0.5)) { 
   circle(x, y, 30);
  
  x += spacing;
  
  if(x > width) {
    x= 0; 
    y += spacing; 
  }
  }
 }

 