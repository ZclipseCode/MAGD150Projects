//The "lobster" variable represents the Lobster font.
var lobster;
//The "yk" variable represents the Yanone Kaffeesatz font.
var yk;
//The "production" variable represents the "A CLICK HERE PRODUCTION" string of text.
var production;
//The "clearClick" variable represents the clear mouse image.
var clearClick;
//The "handClick" variable represents the clicking hand image.
var handClick;
//The "pdf" variable represents the ability to save a PDF.
var pdf;

function preload(){
  lobster = loadFont('Lobster-Regular.ttf');
  yk = loadFont('YanoneKaffeesatz-VariableFont_wght.ttf');
  production = loadStrings('production.txt');
  clearClick = loadImage('clearclick.png');
  handClick = loadImage('handclick.png');
  pdf = createPDF();
  pdf.beginRecord();
}

function setup() {
  createCanvas(400, 550);
  
  clearClick.filter(INVERT);
}

function draw() {
  background('#E75F0F');
  
  textFont(lobster);
  textSize(50);
  textAlign(CENTER);
  text('The\nClick', width/2, 400);
  
  textFont(yk);
  textSize(20);
  text(production, width/2, 500);
  
  image(clearClick, 100, 100);
  
  //This was used to find the text area.
  //rect(100, 350, 200, 150);
  
  if((mouseX > 100) && (mouseX < 300) && (mouseY > 350) && (mouseY < 500)){
    if(mouseIsPressed == true){
      textFont(lobster);
      fill(255);
      textSize(50);
      textAlign(CENTER);
      text('The\nClick', width/2, 400);
      
      textFont(yk);
      textSize(20);
      text(production, width/2, 500);
      
      tint(100);
      image(handClick, 40, 170);
      image(handClick, 180, 170);
    } else{
      textFont(lobster);
      fill(0);
      textSize(50);
      textAlign(CENTER);
      text('The\nClick', width/2, 400);
      
      textFont(yk);
      textSize(20);
      text(production, width/2, 500);
    }
  }
}

function mousePressed(){
  if(mouseButton == RIGHT){
    pdf.save();
  }
}