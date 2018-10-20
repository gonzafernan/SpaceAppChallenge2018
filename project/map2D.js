var map2D;
var sat = [];

// Malargüe 35°28′28″S 69°35′07″O
var lat;
var lon;

var TOKEN = "pk.eyJ1IjoiZmVybmFuZGV6Z2ZnIiwiYSI6ImNqbmhtMndpbjBmZHEzdXF6YmU4aHR2cHkifQ.qeUjbXz-KdhtFf-1G_KRiQ";

var SIZE_IMGX = 1200;
var SIZE_IMGY = 800;
var MAP_ZOOM = 1;

var MAP_TYPE = "dark-v9"; 

//var id = [43641, 40941, 37673, 25544, 25994, 27424, 41557, 41558];
var id = [43641];

function preload(){
    map2D = loadImage("https://api.mapbox.com/styles/v1/mapbox/" + MAP_TYPE + "/static/0,0," + MAP_ZOOM + ",0,0/" + SIZE_IMGX + "x" + SIZE_IMGY + "?access_token=" + TOKEN);
    for (let i=0; i<id.length; i++){
	sat[i] = loadJSON("https://www.n2yo.com/rest/v1/satellite/positions/" + id[i] + "/0/0/0/1/&apiKey=RWA6XB-44DKXH-Q9RH5B-3WHZ");
    }
}

var map1;
var map2;

var C_LAT = 0;
var C_LON = 0;

function gotData(data){
    sat = data;
}


function setup() {
    canvas = createCanvas(SIZE_IMGX, SIZE_IMGY);
    canvas.style('z-index', '-1')
    translate(width / 2, height / 2);
    //loadJSON("https://www.n2yo.com/rest/v1/satellite/positions/43641/0/0/0/1/&apiKey=RWA6XB-44DKXH-Q9RH5B-3WHZ");
    imageMode(CENTER);
    var Cx = convX(C_LON);
    var Cy = convY(C_LAT);
    var x = 0;
    var y = 0;
    map1 = new Map(x, y);
    map2 = new Map(x-SIZE_IMGX, y);
    map1.display();
    map2.display();
    lon = sat.positions[0].satlongitude;
    lat = sat.positions[0].satlatitude;
    x = convX(lon) - Cx;
    y = convY(lat) - Cy;
    fill(255, 0, 255, 200);
    ellipse(x, y, 20, 20);
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

function draw() {
    //background(0);
    //map1.display();
    //map2.display();
    for (let i=0; i<sat.length; i++){
	lon = sat[i].positions[0].satlongitude;
	lat = sat[i].positions[0].satlatitude;
	x = convX(lon) - Cx;
	y = convY(lat) - Cy;
	fill(255, 0, 255, 200);
	ellipse(x, y, 10, 10);
    }
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
