//Colorful Coding. (2021, January 1). *How to make a flow field in p5.js | Coding Project #9* [Video]. YouTube. https://www.youtube.com/watch?v=1-QXuR-XX_s&t=506s

let points = [];
let mult = 0.02;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
  angleMode(DEGREES);
  noiseDetail(1);

  let density = 40;
  let space = width / density;

  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      let posX = x + random(-10, 10);
      let posY = y + random(-10, 10);
      let p = createVector(posX, posY);
      points.push(p);
    } 
  }
}
 
function draw() {
  noStroke();


  for (let i = 0; i < points.length; i++) {
    
    fill(0, 0, 255);

    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);

    let moveX = cos(angle);
    let moveY = sin(angle);
    points[i].add(createVector(moveX, moveY));

    ellipse(points[i].x, points[i].y, 1);
  }
}