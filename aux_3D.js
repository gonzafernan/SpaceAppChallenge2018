
function preload(){
    world = loadImage("imgs/world.jpg");
    cloud = loadImage("imgs/cloud.jpg");
    //night = loadImage("imgs/night.png");
}


function setup(){
    canvas = createCanvas(windowWidth, windowHeight-100, WEBGL);
    canvas.position(0, 100);
    canvas.style('z-index', '-1');
    translate(windowWidth*0.5, windowHeight*0.5);

    button = select("#change");
    button.mousePressed(buttonPressed);
    
    angleX = 0;
    angleY = 0;
    angleZ = 0;

    flag_world = 1;
    flag_cloud = 0;
    flag_night = 0;
}

var flag_world;
var flag_cloud;
var flag_night;

function buttonPressed(){
    console.log("BT");
    flag_cloud = 1;
    flag_world = 0;
}

var angle;

var lat = 30;
var lon = -30;

var r = 270;

var world;
var cloud;
var night;

function draw(){
    background(0);
    //var locX = width/2;
    //var locY = height / 2;
    //directionalLight(250, 250, 250, locX, locY, 50);
    //ambientMaterial(250);
    //noStroke();

    rotateX(angleX);
    rotateY(angleY);
   
    
    angle = angle + 0.01;
    
    ambientLight(200);

    if (flag_world){
	texture(world);
    } else if (flag_cloud){
	texture(cloud);
    } else if (flag_night){
	texture(night);
    }
    
    sphere(r);
    
    var theta = radians(lat) + PI/2;
    var phi = radians(lon) + PI;
    var x = r * sin(theta) * cos(phi);
    var y = r * sin(theta) * sin(phi);
    var z = r * cos(theta);
    translate(x, y, z);
    //texture(255, 255, 0);
    sphere(10);
}

var angleX;
var angleY;
var angleZ;

function mouseDragged(){
    angleX = -(mouseY - width/2)*0.01;
    angleY = (mouseX - height/2)*0.01;
}
