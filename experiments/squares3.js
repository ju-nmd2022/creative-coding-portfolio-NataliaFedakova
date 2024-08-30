// Recreation of artwork by Herbert W. Franke
function setup() {
  createCanvas(600, 600);
  frameRate(2);
}

function draw() {
  noFill();
  stroke(0, 0, 0); 
  strokeWeight(2);
  background(255, 255, 255);

  const gridWidth = width * 1;
  const gridHeight = height * 1;
  const maxSquares = 400;
  const minSize = 10;
  const maxSize = 40;
  
  let counter = 0;

  for (let i = 0; i < maxSquares; i++) {
    let size = random(minSize, maxSize);
    let x = random(gridWidth - size, counter);
    let y = random(gridHeight - size, counter);
    
      push();
      translate(x + size / 2, y + size / 2);
      rotate(random(TWO_PI));
      rect(-size / 2, -size / 2, size, size);
      pop();

      stroke(random(255), random(255), random(255));
  }
  counter += 0.1;
}