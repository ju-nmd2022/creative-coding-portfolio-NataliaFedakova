// Recreation of artwork by Vera Molnár
function setup() {
    createCanvas(600, 600);
  }
  
  const size = 100;
  const layers = 5;
  const numRows = 6;
  const numCols = 6;
  
  function drawLayers(x, y, size, layers) {
    
    rectMode(CENTER);
    for (let i = 0; i < layers; i++) {
      const s = size - (size / layers) * i;
      fill(random(200, 255), random(0, 0), random(200, 85));
      rect(x, y, s, s);
    }
  }
  
  function draw() {
    background(255, 255, 255);
  // 7 lines of code were created with chatGPT
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const x = col * size + size / 2;
        const y = row * size + size / 2;
        drawLayers(x, y, size, layers);
      }
    }
  
    noLoop();
  }