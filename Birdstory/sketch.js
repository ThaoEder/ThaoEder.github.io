var line1 = ["A","hush","lay","over","the","forest",",","as","if","there","were","something","very","wonderful","there",",","that","might","be","meant","for","you","if","you","were","quiet","and","waited","for","it","to","come","."]
var line2 = ["Right","in","the","very","heart","of","Christmas-tree","Land","there","was","a","forest","of","first","that","pointed","to","the","sky","as","straight","as","steeples","."]
var line3 = ["Perhaps","you","have","felt","like","that","when","you","walked","down","the","aisle","of","a","church",",","with","the","sun","shining","through","the","lovely","glass","in","the","windows","."]
var line4 = ["Men","have","often","called","the","woods",'"temples"',";","so","there","is",",","after","all",",","nothing","so","very","strange","in","having","a","preacher","live","in","the","midst","of","the","fir","forest","that","grew","in","Christmas-tree","Land","."]
var index = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
        background("blue");
        fill (255);
        textSize(100);
        text(line1[index], 20, 100);
        text(line2[index], 20, 230);
        text(line3[index], 20, 360);
        text(line4[index], 20, 490);
}

function mousePressed () {
    index = index +1;
    if (index == line2.length) {
        index = 0;

    }
}


