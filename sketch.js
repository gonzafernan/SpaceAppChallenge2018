var map2D;
var map2D_1;

// Malargüe 35°28′28″S 69°35′07″O
var lat;
var lon;

var TOKEN = "pk.eyJ1IjoiZmVybmFuZGV6Z2ZnIiwiYSI6ImNqbmhtMndpbjBmZHEzdXF6YmU4aHR2cHkifQ.qeUjbXz-KdhtFf-1G_KRiQ";

var SIZE_IMGX = 1280;
var SIZE_IMGY = 1000;
var MAP_ZOOM = 1;
var OFFSET = 0;

var MAP_TYPE = "dark-v9";

//var locationData;

function preload(){
    map2D = loadImage("https://api.mapbox.com/styles/v1/mapbox/" + MAP_TYPE + "/static/0,0," + MAP_ZOOM + ",0,0/" + SIZE_IMGX + "x" + SIZE_IMGY + "?access_token=" + TOKEN);
    map2D_1 = loadImage("https://api.mapbox.com/styles/v1/mapbox/" + MAP_TYPE + "/static/0,0," + MAP_ZOOM + "," + OFFSET + ",0/" + SIZE_IMGX + "x" + SIZE_IMGY + "?access_token=" + TOKEN);

    // Carga de JSON asociado a los satélites
    loadSatellites();
    
    // Carga de JSON asociado a los meteoritos
    loadMeteorite();

    // Carga de JSON asociado a los incendios
    loadWildfire();
    
    // Carga de JSON asociado a los terremotos
    loadEarthquake();

    // ACTUAL LOCATION OF THE USER
    //locationData =  getCurrentPosition();
}

var map1;
var map2;

var C_LAT = 0;
var C_LON = 0;

var Cx;
var Cy;
var Xg;
var Yg;

var x;
var y;

var canvas;
var b_fire;
var b_satellite;
var b_meteorite;
var b_earthquake;
var b_clean;

var mode_fire;
var mode_satellite;
var mode_meteorite;
var mode_earthquake;
var mode_clean;

function setup() {

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

    b_clean = select("#clean");
    b_clean.mousePressed(mode_clean);
    flag_clean = 0;
    
    canvas = createCanvas(2* SIZE_IMGX, SIZE_IMGY);
    canvas.position(0, 100);
    canvas.style('z-index', '-1');
    translate(width / 2, height / 2);
//    imageMode(CENTER); Esto es de Processing, no se que hace acá
    Cx = convX(C_LON);
    Cy = convY(C_LAT);
    Xg = 0;
    Yg = 0;
    map1 = new Map(Xg, Yg);
    map2 = new Map(Xg-SIZE_IMGX, Yg);
    map1.display();
    map2.display();
    // RENDER DE LA POSICIÓN ACTUAL DEL USUARIO
    /*
    lon = locationData.longitude;
    lat = locationData.latitude;
    x = convX(lon) - Cx;
    y = convY(lat) - Cy;
    fill(0, 255, 0, 200);
    ellipse(x, y, 30, 30);
    */
    // RENDER DE SATËLITES IMPORTANTES
    displaySatellite();
    
    // RENDER DE METEORITOS
    displayMeteorite();
    
    // RENDER DE INCENDIOS
   // displayWildfire();
    
    // RENDER DE TERREMOTOS
    displayEarthquake();

    ex = 50;
    ey = 50;
    //temp = 100;
    //index_m = random(0, 145);
}

function Map(x, y){
    this.x = x - SIZE_IMGX / 2;
    this.y = y - SIZE_IMGY / 2;
    this.display = function(){
	image(map2D, this.x, this.y, width, height);
	image(map2D_1, this.x+SIZE_IMGX, this.y);
    };
}

var ex;
var ey;

var dim3D;

function draw() {
    background(0);
    map1.x = 0;
    map1.y = 0;
    map2.x = -SIZE_IMGX;
    map2.y = 0;
    map1.display();
    map2.display();
    Xg = SIZE_IMGX / 2;
    Yg = SIZE_IMGY / 2;

    fill(255);
    ellipse(ex, ey, 50, 50);
    ex = ex+1;
    ey = ey+1;
    /*
    for (let i=0; i<sat.length; i++){
	lon = sat[i].positions[0].satlongitude;
	lat = sat[i].positions[0].satlatitude;
	x = convX(lon) - Cx;
	y = convY(lat) - Cy;
	fill(255, 0, 255, 200);
	ellipse(x, y, 10, 10);
    }
    */
    if (flag_satellite){
	// RENDER DE SATËLITES IMPORTANTES
	displaySatellite();
    }

    if (flag_meteorite){
	// RENDER DE METEORITOS
	displayMeteorite();
    }

    if (flag_fire){
	// RENDER DE INCENDIOS
	displayWildfire();
    }

    if (flag_earthquake){
	// RENDER DE TERREMOTOS
	displayEarthquake();
    }
}

/*
function mouseDragged(){
    map1.x = mouseX;
    map2.x = mouseX - SIZE_IMGX;
    if (map1.x > 0){
	map2.x = map1.x - SIZE_IMGX;
    }
    if (map2.x > 0){
	map1.x = map2.x - SIZE_IMGX;
    }
}
*/

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

var flag_clean;
function mode_clean(){
    flag_fire = 0;
    flag_earthquake = 0;
    flag_satellite = 0;
    flag_meteorite = 0;
}
