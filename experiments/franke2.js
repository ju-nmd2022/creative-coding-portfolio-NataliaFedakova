// Recreation of artwork by Herbert W. Franke
class Particle {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = p5.Vector.random2D();
        this.size = random(10, 40);
        this.acceleration.mult(0.07);
        this.lifespan = 200 + Math.random() * 100;
    }

    update() {
        this.lifespan--;
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }
 
    display() { 
        noFill();
        stroke(random(125), random(200), random(205), random(100, 200));
        strokeWeight(2);
        rect(this.position.x, this.position.y, this.size, this.size);
    }
}

let ellipses = [];
let particles = [];

class Ellipse {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.size = 50;
    }

    display() {
        stroke(0, 100, 0);
        strokeWeight(3);
        noFill();
        beginShape();
        curveVertex(this.position.x, this.position.y - this.size / 2);
        curveVertex(this.position.x, this.position.y - this.size / 2);
        curveVertex(this.position.x - 10, this.position.y - this.size - 30);
        curveVertex(this.position.x - 20, this.position.y - this.size - 40);
        endShape();

        fill(139, 0, 0);
        noStroke();
        ellipse(this.position.x, this.position.y, this.size, this.size);
    }
}

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(155, 155, 255, 50);

    for (let i of ellipses) {
        i.display();
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].display();
    }
}

function mouseClicked() {
    ellipses.push(new Ellipse(mouseX, mouseY));
    
    for (let i = 0; i < 10; i++) {
        particles.push(new Particle(mouseX, mouseY));
    }
}
