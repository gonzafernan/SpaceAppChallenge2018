var meteor;
var LIM_METEOR = 147; // Por alguna razón funciona hasta 147
var x_m;
var y_m;
// Carga de JSON asociado a los meteoritos
function loadMeteorite(){
    meteor = loadJSON("https://data.nasa.gov/resource/y77d-th95.json", 'json');
}

// RENDER DE LOS METEORITOS
function displayMeteorite(){
    for (let i = 0; i<147; i++){
	lon = meteor[i].geolocation.coordinates[0];
	lat = meteor[i].geolocation.coordinates[1];
	x_m = convX(lon) - Cx;
	y_m = convY(lat) - Cy;
	fill(255);
	//var m = meteor[i].mass;
	//console.log(m);
	ellipse(x_m + Xg, y_m + Yg, 5, 5);
    }
}

var x_anim = [];
var y_anim = [];
var offset;
var temp;
var index_m;
var flag;

function animateMeteorite(){
    if(temp<1){
	lon = meteor[index_m].geolocation.coordinates[0];
	lat = meteor[index_m].geolocation.coordinates[1];
	x_m = convX(lon) - Cx;
	y_m = convY(lat) - Cy;
    }
    x_anim = x_m + temp;
    y_anim = y_m - temp;
    fill(255, 255, 0);
    ellipse(x_anim+Xg, y_anim+Yg, 5, 5);
    temp = temp - 1;
    
}
