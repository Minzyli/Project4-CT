


function draw() {
  background(251,175,209);
  flock.run();
}

function mouseDragged() {
  flock.addBoid(new Boid(mouseX,mouseY));
}


function Ball(x,y) {
  this.position = {x: x, y: y};
  this.speed = {x:random(-1,7), y:random(-1,7)},
  
  noStroke();
  
  
  this.draw =function() {
    this.position.x = this.position.x + this.speed.x + random(-3,3);
    this.position.y = this.position.y + this.speed.y + random(-3,3);
    ellipse(this.position.x, this.position.y,random(-30,30),30);
  }
}



var balls = [];

function mouseDragged() {
  var ball = new Ball(mouseX, mouseY);
  balls.push(ball);
}

function draw() {
  background(255,204,204);
  for(var i = 0; i < balls.length; i++) { 
  balls[i].draw();
  var R = random(80,250);
  fill(R,R,R+80);
  }
}


function setup() {
  resizeCanvas(500, 500);
}