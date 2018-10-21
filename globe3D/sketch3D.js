
var img;
var angle = 0;
var theta = 0;
var r = 200;   // earth radium

function preload(){
  loadEarthquake();
  loadWildfire();
  loadMeteorite();
  loadSatellites();
  img = loadImage("assets/earth.jpg");
  console.log(eq);
}

function setup(){
  createCanvas(710, 600, WEBGL);
}

function draw(){

    var col = color(153, 51, 0);
    background(25, 26, 26);
    lat = -20;
    lon = 0;
    rotateY(angle)
    angle += 0.005;
    noStroke();


  push();
      fill(col);
      translate(0,0,0);
      texture(img);
      sphere(r);
  pop();

  displayEarthquake3D();
  displayWildfire3D();
  displayMeteorite3D();
  displaySatellite3D();
  theta += 0.05;
}
