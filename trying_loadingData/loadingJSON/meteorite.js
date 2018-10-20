var meteor;
var LIM_METEOR = 147; // Por alguna razón funciona hasta 147

// Carga de JSON asociado a los meteoritos
function loadMeteorite(){
    meteor = loadJSON("https://data.nasa.gov/resource/y77d-th95.json", 'json');
}

// RENDER DE LOS METEORITOS
function displayMeteorite(){
    for (let i = 0; i<147; i++){
	lon = meteor[i].geolocation.coordinates[0];
	lat = meteor[i].geolocation.coordinates[1];
	x = convX(lon) - Cx;
	y = convY(lat) - Cy;
	fill(255);
	//var m = meteor[i].mass;
	//console.log(m);
	ellipse(x, y, 5, 5);
    }
}
