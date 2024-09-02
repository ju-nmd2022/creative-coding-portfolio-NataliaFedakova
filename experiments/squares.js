// Recreation of artwork by Herbert W. Franke
function setup() {
  createCanvas(600, 600);
}

function draw() {
  noFill();
  stroke(0, 0, 0);
  strokeWeight(2);
  background(255, 255, 255);

  const gridWidth = width;
  const gridHeight = height;
  const maxSquares = 400;
  const minSize = 10;
  const maxSize = 40; 

  for (let i = 0; i < maxSquares; i++) {
    let size = random(minSize, maxSize);
    let x = random(gridWidth - size);
    let y = random(gridHeight - size);
    
    rect(x, y, size, size);
  }
  noLoop();
}