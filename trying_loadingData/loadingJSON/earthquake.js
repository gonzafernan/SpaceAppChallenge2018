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
