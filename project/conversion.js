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
