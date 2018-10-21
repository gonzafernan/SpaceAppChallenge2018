var meteor;
var LIM_METEOR = 147; // Por alguna razón funciona hasta 147

// Carga de JSON asociado a los meteoritos
function loadMeteorite(){
    meteor = loadJSON("https://data.nasa.gov/resource/y77d-th95.json", 'json');
}

// RENDER DE LOS METEORITOS
function displayMeteorite3D(){
    for (let i = 0; i<147; i++){
	lon = meteor[i].geolocation.coordinates[0];
	lat = meteor[i].geolocation.coordinates[1];

  var theta = radians(lat);
  var phi = radians(lon) + PI/2;
  var x = r * cos(theta) * cos(phi);
  var y = -r * sin(theta);
  var z = -r * cos(theta) * sin(phi);

  push();
  fill(255);
  translate(x, y, z);
  box(5, 5, 5);
  //sphere(10);
  pop();
    }
}
