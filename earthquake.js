var eq;
var LIM_EQ_EVENTS = 30;

// Carga de JSON asociado a los terremotos
function loadEarthquake(){
    eq = loadJSON("https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/16?days=500&status=closed&limit=" + LIM_EQ_EVENTS, 'json');
}

function displayEarthquake(){
    for (let i = 0; i<eq.events.length; i++){
	lon = eq.events[i].geometries[0].coordinates[0];
	lat = eq.events[i].geometries[0].coordinates[1];
	x = convX(lon) - Cx;
	y = convY(lat) - Cy;
	fill(0, 0, 255, 200);
	ellipse(x + Xg, y + Yg, 10, 10);
    }
}

var r = 200;

function displayEarthquake3D(){
    for (let i = 0; i<eq.events.length; i++){
    	var lon = eq.events[i].geometries[0].coordinates[0];
    	var lat = eq.events[i].geometries[0].coordinates[1];

      var theta = radians(lat);
      var phi = radians(lon) + PI/2;
      var x = r * cos(theta) * cos(phi);
      var y = -r * sin(theta);
      var z = -r * cos(theta) * sin(phi);

      push();
      fill(0, 0, 255, 200);
      translate(x, y, z);
      box(5, 5, 5);
      pop();

    }
}

