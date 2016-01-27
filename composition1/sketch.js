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
}

function mouseMoved () {
	fill("red");
	noStoke();
	ellipse(mouseX,mouseY,50,50);
	return false;
}

/*
function GoToHomePage() {
	window.location = 'compostion2/index.html';
}
*/