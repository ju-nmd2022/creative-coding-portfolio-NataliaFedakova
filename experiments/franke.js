// Recreation of artwork by Herbert W. Franke
// Element simulation code by Garrit Schaap, Jönköping University, 2024.
class Element {
    constructor(x, y) {
      this.position = createVector(x, y); 
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
      this.size = random(10, 40);
      this.mass = 100; 
    }
  
    applyForce(force) {
      let newForce = force.copy();
      newForce.div(this.mass);
      this.acceleration.add(newForce);
    }
  
    update() {
      this.velocity.add(this.acceleration);
      this.velocity.limit(10);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }
  
    draw() {
      fill(random(125), random(200), random(205), random(100, 200));
      stroke(random(125), random(200), random(205), random(100, 200));
      strokeWeight(2);
      rect(this.position.x, this.position.y, this.size, this.size);
    }
  }
  
  let elements = []; 
  let gravity;
  const c = 1; 
  const maxSquares = 200;
  
  function setup() {
    createCanvas(innerWidth, innerHeight);
    gravity = createVector(0, 10);
  
    for (let i = 0; i < maxSquares; i++) {
      let x = random(width);
      let y = random(height);
      elements.push(new Element(x, y));
    }
  }
  
  function draw() {
    background(255, 255, 255);
  
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
  
    
      let friction = element.velocity.copy();
      friction.mult(-1);
      friction.normalize();
      friction.mult(c); 
  
      element.applyForce(friction);
      element.applyForce(gravity);
      element.update();
      element.draw();
  
      if (element.position.x < 0) {
        element.position.x = 0;
        element.velocity.x *= -1;
      } else if (element.position.x > width) {
        element.position.x = width;
        element.velocity.x *= -1;
      }
      if (element.position.y < 0) {
        element.position.y = 0;
        element.velocity.y *= -1; 
      } else if (element.position.y > height) {
        element.position.y = height;
        element.velocity.y *= -1;
      }
    } 
  }
   