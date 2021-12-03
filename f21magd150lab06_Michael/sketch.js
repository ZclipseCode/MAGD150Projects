var theta = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#2EDE0B');
  
  //All of the variables are listed to make the holes.
  var xr1 = 50;
  var yr1 = 350;
  var wr1 = 50;
  var hr1 = 50;
  rectHole(xr1, yr1, wr1, hr1);
  
  rectHole(350, 50, 50, 50);
  
  //All of the variables are listed to make the sun.
  var xs = 100;
  var ys = 100;
  var ws = 50;
  var hs = 50;
  sun(xs, ys, ws, hs);
  
  randomSeed(2);
  for(var i = 0; i < 400; i += 50){
    //All of the variables are listed to make the aliens.
    var X = random(100);
    var Y = random(100);
    var R = random(255);
    var G = random(255);
    var B = random(255);
    var scalar = random(5);
    alien(X, Y, R, G, B, scalar);
  }
}
  
//This makes an alien.
function alien(x, y, r, g, b, s){
  translate(x, y);
  fill(r, g, b);
  scale(s);
  noStroke();
  rect(10, 10, 20, 10);
  rect(28, 20, 2, 5);
  rect(10, 25, 20, 12);
  rect(8, 25, 2, 2);
  rect(28, 37, 2, 2);
  rect(10, 37, 2, 2);
  rect(25, 39, 5, 2);
  rect(7, 39, 5, 2);
}

//This makes the holes.
function rectHole(x, y, w, h){
  push();
  rectMode(CENTER);
  translate(x, y);
  rotate(45);
  fill(0);
  rect(0, 0, w, h);
  pop();
}

//This makes a sun.
function sun(x, y, w, h){
  push();
  fill('#FF741C');
  translate(200, 200);
  rotate(theta);
  rect(x, y, w, h);
  fill(0);
  theta += 0.01;
  pop();
}