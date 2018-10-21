// Arreglo que contendrá los objetos con la información JSON de cada satélites
var sat = [0, 0, 0, 0, 0, 0, 0, 0];

// IDs de los satélites elegidos
var id = [43641, 40941, 37673, 25544, 25994, 27424, 41557, 41558];

// Carga de JSON asociado a los satélites
function loadSatellites(){
    for (let i=0; i<id.length; i++){
	sat[i] = loadJSON("https://www.n2yo.com/rest/v1/satellite/positions/" + id[i] + "/0/0/0/1/&apiKey=RWA6XB-44DKXH-Q9RH5B-3WHZ", 'json');
    }
}

// Callback de recepción de JSON asociado a satélites
function gotData0(data){
    console.log("realUPDATE");
    sat[0] = data;
}

function gotData1(data){
    console.log("realUPDATE");
    sat[1] = data;
}

function gotData2(data){
    console.log("realUPDATE");
    sat[2] = data;
}

function gotData3(data){
    console.log("realUPDATE");
    sat[3] = data;
}

function gotData4(data){
    console.log("realUPDATE");
    sat[4] = data;
}

function gotData5(data){
    console.log("realUPDATE");
    sat[5] = data;
}

function gotData6(data){
    console.log("realUPDATE");
    sat[6] = data;
}

function gotData7(data){
    console.log("realUPDATE");
    sat[7] = data;
}

function displaySatellite(){
    // RENDER DE SATËLITES IMPORTANTES
    for (let i = 0; i<sat.length; i++){
	lon = sat[i].positions[0].satlongitude;
	lat = sat[i].positions[0].satlatitude;
	x = convX(lon) - Cx;
	y = convY(lat) - Cy;
	fill(255, 0, 255, 200);
	ellipse(x + Xg, y + Yg, 20, 20);

    }
}

function displaySatellite3D(){
    // RENDER DE SATËLITES IMPORTANTES
    for (let i = 0; i<sat.length; i++){
	lon = sat[i].positions[0].satlongitude;
	lat = sat[i].positions[0].satlatitude;

	var h = r + 40;
	
	var theta = radians(lat);
	var phi = radians(lon) + PI/2;
	var x = h * cos(theta) * cos(phi);
	var y = -h * sin(theta);
	var z = -h * cos(theta) * sin(phi);

	push();
	fill(180);
	translate(x, y, z);
	model(satModel);
	pop();

    }
}


function updateSatellites(){
    loadJSON("https://www.n2yo.com/rest/v1/satellite/positions/" + id[0] + "/0/0/0/1/&apiKey=RWA6XB-44DKXH-Q9RH5B-3WHZ", gotData0, 'json');
    loadJSON("https://www.n2yo.com/rest/v1/satellite/positions/" + id[1] + "/0/0/0/1/&apiKey=RWA6XB-44DKXH-Q9RH5B-3WHZ", gotData1, 'json');
    loadJSON("https://www.n2yo.com/rest/v1/satellite/positions/" + id[2] + "/0/0/0/1/&apiKey=RWA6XB-44DKXH-Q9RH5B-3WHZ", gotData2, 'json');
    loadJSON("https://www.n2yo.com/rest/v1/satellite/positions/" + id[3] + "/0/0/0/1/&apiKey=RWA6XB-44DKXH-Q9RH5B-3WHZ", gotData3, 'json');
    loadJSON("https://www.n2yo.com/rest/v1/satellite/positions/" + id[4] + "/0/0/0/1/&apiKey=RWA6XB-44DKXH-Q9RH5B-3WHZ", gotData4, 'json');
    loadJSON("https://www.n2yo.com/rest/v1/satellite/positions/" + id[5] + "/0/0/0/1/&apiKey=RWA6XB-44DKXH-Q9RH5B-3WHZ", gotData5, 'json');
    loadJSON("https://www.n2yo.com/rest/v1/satellite/positions/" + id[6] + "/0/0/0/1/&apiKey=RWA6XB-44DKXH-Q9RH5B-3WHZ", gotData6, 'json');
    loadJSON("https://www.n2yo.com/rest/v1/satellite/positions/" + id[7] + "/0/0/0/1/&apiKey=RWA6XB-44DKXH-Q9RH5B-3WHZ", gotData7, 'json');
    console.log("UPDATE");
}
