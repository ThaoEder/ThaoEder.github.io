function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
}

var myPosition = 0;

function draw(){
  var bgColor = random(200,255);
  background(0,0,bgColor);
  var ellipseWidth = random(100);
  var ellipseHeight = random(100);
  var ellipseX = random(width);
  var ellipseY = random(height);
  ellipse(ellipseX,ellipseY,ellipseWidth, ellipseHeight);

  /*
  var mousePercent = (mouseX/width) * 255;
  console.log(mousePercent);
  myPosition++;
  if(key == "H") {
    background("red");
  } else {
    background("violet");
  }
    line(pmouseX, pmouseY, mouseX, mouseY);
    console.log(myPosition);
*/
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); 
}


