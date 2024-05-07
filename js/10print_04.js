function setup() {
    createCanvas(500, 500);
    colorMode(HSB);
  }
  
  function draw() {
    background(220);
    noStroke();
    
    //try changing these colors
    colorA = color(200,100,100);
    colorB = color(200,100,30);
    
    for (let i = 0;i<12;i++){  
      
      //converts i to a fraction between 0 and 1
      position = map(i,0,10,0,1);
      
      //that position determines where the LerpedColor
      //is between colorA and colorB
      LerpedColor = lerpColor(colorA,colorB,position);
      
      fill (LerpedColor) ;
      rect (0,i*height/15,width,height/18) ;
    }
}