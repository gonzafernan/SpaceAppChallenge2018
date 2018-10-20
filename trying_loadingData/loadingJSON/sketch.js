var map2D;

var meteor;

var eq;

// Malargüe 35°28′28″S 69°35′07″O
var lat;
var lon;

var TOKEN = "pk.eyJ1IjoiZmVybmFuZGV6Z2ZnIiwiYSI6ImNqbmhtMndpbjBmZHEzdXF6YmU4aHR2cHkifQ.qeUjbXz-KdhtFf-1G_KRiQ";

var SIZE_IMGX = 1200;
var SIZE_IMGY = 800;
var MAP_ZOOM = 1;

var MAP_TYPE = "dark-v9";

var LIM_EQ_EVENTS = 30;

//var locationData;

function preload(){
    map2D = loadImage("https://api.mapbox.com/styles/v1/mapbox/" + MAP_TYPE + "/static/0,0," + MAP_ZOOM + ",0,0/" + SIZE_IMGX + "x" + SIZE_IMGY + "?access_token=" + TOKEN);

    // Carga de JSON asociado a los satélites
    loadSatellites();
    
    meteor = loadJSON("https://data.nasa.gov/resource/y77d-th95.json");

    // Carga de JSON asociado a los incendios
    loadWildfire();
    
    eq = loadJSON("https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/16?days=500&status=closed&limit=" + LIM_EQ_EVENTS);

    // ACTUAL LOCATION OF THE USER
    //locationData =  getCurrentPosition();
}

var map1;
var map2;

var C_LAT = 0;
var C_LON = 0;

var Cx;
var Cy;
var x;
var y;

function setup() {
    createCanvas(SIZE_IMGX, SIZE_IMGY);
    translate(width / 2, height / 2);
    imageMode(CENTER);
    Cx = convX(C_LON);
    Cy = convY(C_LAT);
    x = 0;
    y = 0;
    map1 = new Map(x, y);
    map2 = new Map(x-SIZE_IMGX, y);
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
    /*
    for (let i = 0; i<meteor.length; i++){
	lon = meteor[i].geolocation.coordinates[0];
	lat = meteor[i].geolocation.coordinates[1];
	x = convX(lon) - Cx;
	y = convY(lat) - Cy;
	fill(255, 0, 0, 200);
	//var m = meteor[i].mass;
	//console.log(m);
	ellipse(x, y, 10, 10);
    }
    */

    // RENDER DE INCENDIOS
    displayWildfire();
    
    // RENDER DE TERREMOTOS
    for (let i = 0; i<eq.events.length; i++){
	lon = eq.events[i].geometries[0].coordinates[0];
	lat = eq.events[i].geometries[0].coordinates[1];
	x = convX(lon) - Cx;
	y = convY(lat) - Cy;
	fill(0, 0, 255, 200);
	ellipse(x, y, 10, 10);
    }
}


function convX(lon){
    lon = radians(lon);
    var n1 = (256 / PI) * pow(2, MAP_ZOOM);
    var n2 = (lon + PI);
    return n1*n2;
}

function convY(lat){
    lat = radians(lat);
    var n1 = (256 / PI) * pow(2, MAP_ZOOM);
    var n2 = tan(PI / 4 + lat / 2);
    var n3 = PI - log(n2);
    return n1*n3;
}

function Map(x, y){
    this.x = x;
    this.y = y;
    this.display = function(){
	image(map2D, this.x, this.y);
    };
}

iter = 0;

function draw() {
    //background(0);
    //map1.display();
    //map2.display();
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
    }

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
