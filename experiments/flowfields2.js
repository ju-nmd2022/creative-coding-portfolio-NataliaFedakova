//Colorful Coding. (2021, January 1). *How to make a flow field in p5.js | Coding Project #9* [Video]. YouTube. https://www.youtube.com/watch?v=1-QXuR-XX_s&t=506s
let points = [];
let mult = 0.02;
let dotSpacing = 10;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
  angleMode(DEGREES);
  noiseDetail(1);

  let density = 100;
  let space = width / density;

  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      let posX = x + random(-10, 10);
      let posY = y + random(-10, 10);
      let p = {
        pos: createVector(posX, posY),
        prevPos: createVector(posX, posY)
      };
      points.push(p);
    } 
  }
}

function draw() {
  noStroke();
  fill(0, 0, 255);

  for (let i = 0; i < points.length; i++) {
    let p = points[i].pos;

    let angle = map(noise(p.x * mult, p.y * mult), 0, 1, 0, 720);

    let moveX = cos(angle);
    let moveY = sin(angle);
    p.add(createVector(moveX, moveY));

    let distMoved = dist(p.x, p.y, points[i].prevPos.x, points[i].prevPos.y);

    if (distMoved >= dotSpacing) {
      ellipse(p.x, p.y, 3);
      points[i].prevPos = p.copy();
    }
  }
}