// Recreation of artwork by Peter Saville
function setup() {
    createCanvas(600, 600);
    frameRate(5);
  }
  
  function draw() {
    background(0, 0, 0); 
    noFill(); 
    const originalY = 100; 
    const divider = 30; 
    const numRows = 40; 
    const lineSpacing = 10; 
    const maxAmplitude = -100; 
    const waveRangeStart = 200; 
    const waveRangeEnd = 400;
    let counter = 0;
  
    
  // next lines of code were created with chatGPT
    for (let row = 0; row < numRows; row++) {
        let yOffset = originalY + row * lineSpacing;
        beginShape();
        for (let x = 0; x < width; x++) {
            let amplitude;
            if (x >= waveRangeStart && x <= waveRangeEnd) {
                amplitude = maxAmplitude * (1 - abs(map(x, waveRangeStart, waveRangeEnd, -1, 1)));
            } else {
                amplitude = 1;
            }
  
            const y = yOffset + noise(x / divider, row * 0.1) * amplitude;
            vertex(x, y);
            stroke(random(255), random(255), random(255)); // Random color for each square
            strokeWeight(random(1, 3)); // Random stroke weight between 1 and 5
        }
        endShape();
    }
    counter += 0.1;
  }
  
  