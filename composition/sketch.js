/*function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	// place your drawing code here
	background("#FFCCCC")
	fill("red");
	noFill();
	triangle(width,height,100,100,20,120);
	fill("blue");
	strokeWeight(3);
	quad(50,100,150,170,300,100,120,300);
	stroke("#33CCCC")
	strokeWeight(8);
	line(width-50,50,150,height/2);
	ellipse(100,100,40,40);
	fill(50,100,200);
	rect(200,200,70,70);
	fill("#33FF99");
	rect(250,150,100,70,20);
	point(100,300);

}*/

function setup () {
	createCanvas(windowWidth,windowHeight);
}

function draw () {
	background("#CCFFFF");
	noStroke();
	fill("red");
	ellipse(width/2,height/2,mouseX,mouseX);
	stroke("#CCFFFF");
	strokeWeight(5);
	noFill();
	triangle(width/2,mouseX,width,height/2,width/2,mouseY);
	triangle(width-200,mouseX,width,height/2,width-200,mouseY);
	triangle(0,width/2,mouseX,height/2,width/2,mouseY);
	triangle(0,width-200,mouseX,height-200,width/2,mouseY);
	rect(width/2,0,mouseY,mouseY);
	noStroke();
//	quad(0,height-300,width,height/2,width-100,height,width-300,height);
}

function mouseMoved () {
	fill("red");
	noStoke();
	ellipse(mouseX,mouseY,50,50);
	return false;
}
