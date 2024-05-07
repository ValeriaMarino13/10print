
let x = 0;
let y = 0;

function setup () {
  createCanvas (400,400);
  background(130,170,180);
}
  
function draw () { 
  stroke(100);
  strokeWeight(5);
  fill(255);
  rect(x, y, 20, 100);
  
  x= x + 40;
  
  if(x>width) {
    x = 0;
    y = y + 100;
    }
    //y= y + 100;
  
  
  }