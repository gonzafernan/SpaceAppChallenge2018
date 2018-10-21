
var img;
var angle = 0;
var theta = 0;
var table;
var r = 200;   // earth radium


function setup(){
  createCanvas(710, 600, WEBGL);
  img = loadImage("assets/earth.jpg");

}

function draw(){

var outside = color(153, 51, 0);
background(120);
  lat = -20;
  lon = 0;
  mag = 10;
  rotateY(angle)
  angle += 0.005;
  noStroke();


  var theta = radians(lat);
  var phi = radians(lon) + PI/2;
  var x = r * cos(theta) * cos(phi);
  var y = -r * sin(theta);
  var z = -r * cos(theta) * sin(phi);
  var pos = [x, y, z];


  // var xaxis = [1, 0, 0];
  // var dot = xaxis[0] * pos[0] + xaxis[1] * pos[1] + xaxis[2] * pos[2];
  // var den1 = pow((pow(xaxis[0], 2) + pow(xaxis[1], 2) + pow(xaxis[2], 2)), 0.5);
  // var den2 =  pow((pow(pos[0], 2) + pow(pos[1], 2) + pow(pos[2], 2)), 0.5);
  // var angleb = Math.acos(dot/(den1*den2));
  // var raxis = [0, 0, 0];
  // raxis = math.cross(xaxis, pos);

  push();
    translate(x, y, z);
    //rotate(angleb, raxis[0], raxis[1], raxis[2]);
    fill(outside);
    //texture(img);
    box(10, 10, 10);
  pop();
  push();
      fill(outside);
      translate(0,0,0);
      texture(img);
      sphere(r);
  pop();
  theta += 0.05;
}
