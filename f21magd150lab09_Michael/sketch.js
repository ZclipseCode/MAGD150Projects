var haunting2;
var reverb;
var reflectionMan;
var neucha;
var button;
var reflection;

function preload(){
  soundFormats('wav');
  haunting2 = loadSound('Haunting2.wav')
  
  reflectionMan = createVideo(['reflectionMan.mp4']);
  reflectionMan.hide();
  
  neucha = loadFont('Neucha-Regular.ttf');
}

function setup() {
  createCanvas(400, 400);
  
  button = createButton('click...');
  button.position(175, 200);
  button.mousePressed(video);
  
  reverb = new p5.Reverb();
  reverb.process(haunting2, 3, 2);
  haunting2.setVolume(0.5);
  haunting2.play();
  haunting2.loop();
  
  reflection = createElement('h2', '');
  reflection.position(60, 90);
}

function draw() {
  background(0);
  
  //This was originally used as a cooler "click..." prompt but because of the HTML element requirement I did not use it.
  //textFont(neucha);
  //fill(255);
  //textSize(50);
  //textAlign(CENTER);
  //text('click...', 200, 200);
  
  reflectionMan.size(300, 200);
  image(reflectionMan, 50, 100);
}

function video(){
  reflectionMan.loop();
  button.hide();
  
  reflection.html('reflection');
}