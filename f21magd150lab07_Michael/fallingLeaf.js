//This class if for the falling leaf.
class fallingLeaf{
  constructor(){
    var movement;
    var randomizer;
    this.movement = -150;
    this.randomizer = random(-150, 400);
  }
  
  move(){
    this.movement = this.movement += 3;
  }
  
  draw(){
  //This translation allows the leaf to appear somewhere different
  //with every play.
  translate(this.randomizer, this.movement);
  noStroke();
  fill('#DE570B');
  triangle(0, 50, 50, 50, 50, 100);
  triangle(50, 50, 75, 0, 100, 50);
  triangle(100, 100, 100, 50, 150, 50);
  rect(50, 50, 50, 50);
  rect(70, 100, 12.5, 50);
  }
}