function setup() {
  createCanvas(800,600);
  background(0)
}

function draw() {
  const colors = ['#CDDC39', '#FFC107', '#2196F3'];
  stroke(random(colors));
  fill(random(colors));
  ellipse(random(width),random(height), random(100), random(50));
  strokeWeight(10);
  line(random(width), random(height), random(width), random(height));
  
}