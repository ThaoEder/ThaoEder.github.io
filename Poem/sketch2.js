function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background("#1ba1e2");
    strokeWeight(2);
    noFill();
    //text("H",width/2,200);
    //text("A",width/2,200);
    
    
    var y = 20;
    
    while (y <= height) {
        stroke(255);
        ellipse(0, y, mouseX, mouseY);
        ellipse(width, y, mouseX, mouseY);
        y = y + 50;
    }
}

/*for (var i = 0, i < 10, i++) {
        

}

var x = 0;
while (x < 100) {
    // do stuff
    x = x + 1;
}
} */