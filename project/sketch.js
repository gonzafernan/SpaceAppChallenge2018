var map2D;

// API meteoritos
var url_met = 'https://data.nasa.gov/resource/y77d-th95.json';

function setup() {
    var canvas;
    loadJSON(url_met, receivedData);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    background(0);
}

function receivedData(data){
    println(data);
}

function draw() {
    background(0);
}
