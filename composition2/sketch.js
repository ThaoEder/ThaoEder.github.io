function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background("#1ba1e2");
    strokeWeight(2);
    noFill();
    
    var y = 20;
    
    while (y <= height) {
        stroke(255);
        ellipse(0, y, mouseX, mouseY);
        ellipse(width, y, mouseX, mouseY);
        y = y + 50;
}
}