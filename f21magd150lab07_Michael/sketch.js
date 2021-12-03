var leaf;
//This array assigns the width of three trees.
var treeWidth = [7, 27, 14];

function setup() {
  createCanvas(400, 400);
  //This uses the fallinLeaf.js class to create a new leaf.
  leaf = new fallingLeaf();
}

function draw() {
  background('#A1C6F5');
  fill('#DB5E26')
  rect(50, 0, treeWidth[0], height);
  rect(150, 0, treeWidth[1], height);
  rect(300, 0, treeWidth[2], height);

  
  leaf.move();
  leaf.draw();
}