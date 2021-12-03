var off1 = true;
var highlight1 = false;
var off2 = true;
var highlight2= false;
var click1 = false;
var click2 = false;
var blu = false;
var bounce = false;
var x = 0;
var xspeed = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  update(mouseX, mouseY);
  background('#FA793A');
  
  if(blu == false){
    fill(0);
    rect(125, 150, 150, 100);
  }else{
    fill('#3155E8');
    rect(125, 150, 150, 100);
  }
  
  if(bounce == true){
    fill(255);
    circle(140 + x, 200, 30);
    x = xspeed ++;
    
    if(x > 120){
      xspeed = 0;
    }
  }
  
  fill(220);
  rect(162.5, 300, 75, 95);
  
  textSize(10);
  fill(0);
  text('Blue', 170, 319);
  
  textSize(10);
  fill(0);
  text('Wrap', 168, 333)
  
  if(off1 == true){
    fill(255);
    rect(195, 310, 10, 10); 
  } else{}
  
  if(highlight1 == true){
    fill(150);
    rect(195, 310, 10, 10);
  } else{}
  
  if(off2 == true){
    fill(255)
    circle(200, 330, 10);
  }
  
  if(highlight2 == true){
    fill(150);
    circle(200, 330, 10);
  }
}

function update(x, y){
  if(overRect(195, 310, 10, 10)){
    highlight1 = true;
    off1 = false;
    click1 = true;
  } else{
    highlight1 = false;
    off1 = true;
    click1 = false;
  }
  
  if(overCircle(200, 330, 10)){
    highlight2 = true;
    off2 = false;
    click2 = true;
  } else{
    highlight2 = false;
    off2 = true;
    click2 = false;
  }
}

function overRect( x,  y,  width,  height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}

function overCircle(x, y, diameter){
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}

function mousePressed(){
  if(click1 == true){
    blu = !blu;
  }
  
  if(click2 == true){
    bounce = !bounce;
  }
}