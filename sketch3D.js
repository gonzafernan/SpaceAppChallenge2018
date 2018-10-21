var satModel;

var img;
var img_sea;
var img_snow;
var img_cloud;
var img_tc;
var img_od;
var img_dt;
var img_nt;

var angleX;
var angleY;
var r = 400;   // earth radium

function preload(){
    loadEarthquake();
    loadWildfire();
    loadMeteorite();
    loadSatellites();
    img = loadImage("assets/earth.jpg");
    img_sea = loadImage("assets/sea.jpg");
    img_snow = loadImage("assets/snow.jpg");
    img_cloud = loadImage("assets/clouds.jpg");
    img_tc = loadImage("assets/true_color_oct2018_lower_res.jpg");
    img_od = loadImage("assets/ocean_depth2002_lower_res.jpg");
    img_dt = loadImage("assets/land_temperature_day_feb2017.jpg");
    img_nt = loadImage("assets/land_temperature_night_feb2017.jpg");
    satModel = loadModel("satellite_obj.obj");
}

var canvas;

var b_fire;
var b_satellite;
var b_meteorite;
var b_earthquake;
var b_cloud;
var b_sea;
var b_snow;
var b_clean;
var b_tc;
var b_od;
var b_dt;
var b_nt;

var mode_fire;
var mode_satellite;
var mode_meteorite;
var mode_earthquake;
var mode_clean;
var mode_tc;
var mode_od;
var mode_dt;
var mode_nt;

function setup(){

    b_satellite = select("#satellite");
    b_satellite.mousePressed(mode_satellite);
    flag_satellite = 0;
    
    b_meteorite = select("#meteorite");
    b_meteorite.mousePressed(mode_meteorite);
    flag_meteorite = 0;
    
    b_earthquake = select("#earthquake");
    b_earthquake.mousePressed(mode_earthquake);
    flag_earthquake = 0;
    
    b_fire = select("#fire");
    b_fire.mousePressed(mode_fire);
    flag_fire = 0;

    b_cloud = select("#cloud");
    b_cloud.mousePressed(mode_cloud);
    flag_cloud = 0;

    b_sea = select("#sea");
    b_sea.mousePressed(mode_sea);
    flag_sea = 0;

    b_snow = select("#snow");
    b_snow.mousePressed(mode_snow);
    flag_snow = 0;

    b_tc = select("#true_color");
    b_tc.mousePressed(mode_tc);
    flag_tc = 0;

    b_od = select("#prof_sea");
    b_od.mousePressed(mode_od);
    flag_od = 0;

    b_dt = select("#day_temp");
    b_dt.mousePressed(mode_dt);
    flag_dt = 0;

    b_nt = select("#night_temp");
    b_nt.mousePressed(mode_nt);
    flag_nt = 0;
    
    b_clean = select("#clean");
    b_clean.mousePressed(mode_clean);
    flag_clean = 0;

    
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.style('z-index', '-1');
    angleX = 0;
    angleY = 0;
}

function draw(){
    r = 300;
    var col = color(153, 51, 0);
    background(0);
    ambientLight(200);
    lat = -20;
    lon = 0;
    rotateX(angleX);
    rotateY(angleY);
 
    noStroke();


  push();
      fill(col);
      translate(0,0,0);
    texture(img);
    if (flag_sea){
	texture(img_sea);
    } else if(flag_snow){
	texture(img_snow);
    } else if (flag_cloud){
	texture(img_cloud);
    } else if (flag_tc){
	texture(img_tc);
    } else if (flag_od){
	texture(img_od);
    } else if (flag_dt){
	texture(img_dt);
    } else if (flag_nt){
	texture(img_nt);
    }
      sphere(r);
  pop();
    if (flag_earthquake){
	displayEarthquake3D();
    }
    if (flag_fire){
	displayWildfire3D();
    }
    if (flag_meteorite){
	displayMeteorite3D();
    }
    if (flag_satellite){
	displaySatellite3D();
    }
}

function mouseDragged(){
    angleX = -(mouseY - width/2)*0.01;
    angleY = (mouseX - height/2)*0.01;
}


var flag_fire;
function mode_fire(){
    if (flag_fire){
	flag_fire = 0;
    } else {
	flag_fire = 1;
    }
}

var flag_earthquake;
function mode_earthquake(){
    if (flag_earthquake){
	flag_earthquake = 0;
    } else {
	flag_earthquake = 1;
    }
}

var flag_satellite;
function mode_satellite(){
    if (flag_satellite){
	flag_satellite = 0;
    } else {
	flag_satellite = 1;
    }
}

var flag_meteorite;
function mode_meteorite(){
    if (flag_meteorite){
	flag_meteorite = 0;
    } else {
	flag_meteorite = 1;
    }
}

var flag_cloud;
function mode_cloud(){
    if (flag_cloud){
	flag_cloud = 0;
    } else {
	flag_cloud = 1;
    }
}

var flag_snow;
function mode_snow(){
    if (flag_snow){
	flag_snow = 0;
    } else {
	flag_snow = 1;
    }
}

var flag_sea;
function mode_sea(){
    if (flag_sea){
	flag_sea = 0;
    } else {
	flag_sea = 1;
    }
}

var flag_tc;
function mode_tc(){
    if (flag_tc){
	flag_tc = 0;
    } else {
	flag_tc = 1;
    }
}

var flag_od;
function mode_od(){
    if (flag_od){
	flag_od = 0;
    } else {
	flag_od = 1;
    }
}

var flag_dt;
function mode_dt(){
    if (flag_dt){
	flag_dt = 0;
    } else {
	flag_dt = 1;
    }
}

var flag_nt;
function mode_nt(){
    if (flag_nt){
	flag_nt = 0;
    } else {
	flag_nt = 1;
    }
}



var flag_clean;
function mode_clean(){
    flag_fire = 0;
    flag_earthquake = 0;
    flag_satellite = 0;
    flag_meteorite = 0;
    flag_sea = 0;
    flag_snow = 0;
    flag_cloud = 0;
    flag_tc = 0;
    flag_od = 0;
    flag_dt = 0;
    flag_nt = 0;
}

