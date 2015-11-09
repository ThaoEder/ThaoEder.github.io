function setup() {
    createCanvas(windowWidth,windowHeight);
}

function myFunction() {
    var x = document.getElementById("myText").value;
    var x2 = document.getElementById("myText2").value;
    document.getElementById("demo").innerHTML = x;
    document.getElementById("demo2").innerHTML = x2;
}

