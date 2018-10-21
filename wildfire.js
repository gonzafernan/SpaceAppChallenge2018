var fire;
var DAYS_FIRE = 365;

function loadWildfire(){
    fire = loadJSON("https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8?days=" + DAYS_FIRE);
}

function displayWildfire(){
    for (let i = 0; i<fire.events.length; i++){
	lon = fire.events[i].geometries[0].coordinates[0];
	lat = fire.events[i].geometries[0].coordinates[1];
	x = convX(lon) - Cx;
	y = convY(lat) - Cy;
	fill(255, 0, 0, 200);
	ellipse(x + Xg, y + Yg, 10, 10);
    }
}

function displayWildfire3D(){
    for (let i = 0; i<fire.events.length; i++){
    	lon = fire.events[i].geometries[0].coordinates[0];
    	lat = fire.events[i].geometries[0].coordinates[1];

      var theta = radians(lat);
      var phi = radians(lon) + PI/2;
      var x = r * cos(theta) * cos(phi);
      var y = -r * sin(theta);
      var z = -r * cos(theta) * sin(phi);

      push();
      fill(255, 0, 0, 200);
      translate(x, y, z);
      box(5, 5, 5);
      pop();
    }
}

