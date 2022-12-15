


function draw() {
  background(60,175,50);
  flock.run();
}

function mouseDragged() {
  flock.addBoid(new Boid(mouseX,mouseY));
}


function Ball(x,y) {
  this.position = {x: x, y: y};
  this.speed = {x:random(-18,18), y:random(-18,18)},
  
  noStroke();
  
  
  this.draw =function() {
    this.position.x = this.position.x + this.speed.x + random(-2,2);
    this.position.y = this.position.y + this.speed.y + random(-2,2);
    circle(this.position.x, this.position.y,random(-30,30),30);
  }
}



var balls = [];

function mouseDragged() {
  var ball = new Ball(mouseX, mouseY);
  balls.push(ball);
}

function draw() {
  background(100,250,70);
  for(var i = 0; i < balls.length; i++) { 
  balls[i].draw();
  var R = random(220,90);
  fill(R,R,R-220);
  }
}


function setup() {
  resizeCanvas(600, 600);
}