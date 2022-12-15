
var bugs = []; 

function setup() {
  createCanvas(1280, 800);
  noStroke();
  
  for (var i=0; i<100; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  background(253, 232, 0);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(30, 60);
  this.speed = 0.2;
  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    if (mouseIsPressed) {
      if (mouseButton == LEFT)
      this.speed = 5;
      if (mouseButton == RIGHT)
      this.speed = 0.2;
    }
  
  };

  this.display = function() {
    fill(0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}