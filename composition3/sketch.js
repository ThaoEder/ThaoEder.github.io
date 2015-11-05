function setup(){
  createCanvas(windowWidth, 100);
}

function draw(){
    background(100);
    s1 = "Alice was beginning to get very tired of sitting by her sister on the bank";
    s2 = "So she was considering in her own mind";
    s3 = "and fortunately was just in time to see it pop down a large rabbit-hole under the hedge"
    fill(50);
    textFont("DINPro");
    text(s1, 10, 10, 70, 80);
    text(s2, 100, 10, 70, 80);
    text(s3, 200, 10, 70, 80);
}

