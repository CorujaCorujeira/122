var x = 0;
var y = 0;

var screenWidth = 0;
var screenHeight = 0;

var drawApple = "";
var toNumber = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var speakData = "";
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 var content = event.results[0][0].transcript;

    toNumber = Number(content);
    if (Number.isInteger(toNumber)) {
      document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content + "a maçã começou a ser desenhada"; 
    }
    else{
      document.getElementById("status").innerHTML = "A fala não foi reconhecida"; 
    }

}

function setup() {
  screenWidth=window.innerWidth();
  screenHeight=window.innerHeight();
  createCanvas(screenWidth, screenHeight-150)
  canvas.position(0,150)
}

function draw() {
  if(drawApple == "set")
  {
    for (let i = 1; i<toNumber; i++) {
      var x =Math.floor(Math.random()*700);
      var y =Math.floor(Math.random()*400);
      Image(apple,x,y,50,50);
    }
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
    speak
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
function preload(){
  loadImage(drawApple)
}