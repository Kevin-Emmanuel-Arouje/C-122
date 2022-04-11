x = 0;
y = 0;
drawCircle = "";
drawRect = "";
speechRecognition = window.webkitSpeechRecognition;
recognization = new speechRecognition();

function start() {
    document.getElementById("status").innerHTML = "system is listening, please speak";
    recognization.start();
}
recognization.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "speech has been recognised as" + content;
    if (content == "circle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "started drawing circle";
        drawCircle = "set";
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "started drawing rectangle";
        drawRect = "set";
    }
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if (drawCircle == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "circle has been drawn";
        drawCircle = "";
    }
    if (drawRect == "set") {
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML = "rectangle has been drawn";
        drawRect = "";
    }
}