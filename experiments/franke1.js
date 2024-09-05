// Recreation of artwork by Herbert W. Franke
class Particle {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = p5.Vector.random2D();
        this.size = random(10, 40);
        this.acceleration.mult(0.07);
    }

    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
    }

    display() {
        fill(random(125), random(200), random(205), random(100, 200));
        stroke(random(125), random(200), random(205), random(100, 200));
        strokeWeight(2);
        rect(this.position.x, this.position.y, this.size, this.size);
    }
}

let particles = [];

function setup() { 
    createCanvas(600, 600);
}

function draw() {
    background(255);
    particles.push(new Particle(width / 2, height / 2));

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].display();
    }
}
