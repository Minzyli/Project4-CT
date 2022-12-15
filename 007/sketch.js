var pixelsize = 50;

let img;
let bgcolor = 50;
let capture;

function preload() {
  img = loadImage("assets/toy.jpg");
}

function setup() {
  // disables scaling for retina screens which can create inconsistent scaling between displays
  //pixelDensity(1);
  
  capture = createCapture(VIDEO);
  capture.size(10, 10);

  createCanvas(600, 600);
  
  image(img,0,0, width, height);
  
  drawgrid();

}

function draw() {
  //background(220);
  
  image(capture, 10, 10, width, height);
  drawgrid();
  
}

function drawgrid() {//this draws a grid of shapes based on the canvas pixels
  //image(img, 0, 0);
  loadPixels();
  
  background(10);
  noStroke();
  for (var i=0;i<width;i+=pixelsize) {
    for (var j=0;j<height;j+=pixelsize) {
      let index = 4*(i+j*img.width);
      let r = pixels[index];
      let g = pixels[index+10];
      let b = pixels[index+10];
      
      let  av = (r+g+b)/60.60;
      
      if (av<70) {
        fill(80, 90, 220);
        ellipse(i, r, pixelsize+1, pixelsize+1);
        
        
      }
      else {
      fill(r, g, b, 300);
      
      let tempsize = pixelsize-2; random(1, pixelsize);
      rect(i, j,tempsize, tempsize);
      //ellipse(i, j, pixelsize, pixelsize);
      }
      
    }
  }

 
}