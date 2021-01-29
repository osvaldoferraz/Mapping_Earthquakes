// Add console.log to check to see if our code is working
console.log('working');

// We create a tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//Sill Drill
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//Create a base layer taht holds both maps
let baseMaps = {
    Streets: streets,
    Satellite: satelliteStreets
};

// Create the map object with a center and zoom lelvel
// let map = L.map('mapid').setView([40.7, -94.5], 4);
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [satelliteStreets]
});

L.control.layers(baseMaps).addTo(map);

let torontoHoods = 'https://raw.githubusercontent.com/osvaldoferraz/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json'

//SKILL DRILL
// Create a style for the polygons
let myStyle = {
    color: "blue",
    fillColor: 'yellow',
    weight: 1
}

// Grabbin our GeoJSON Data
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    //Creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {
        style: myStyle,
        onEachFeature: function(features, details) {
        details.bindPopup(`<h2>Neighborhood: ${features.properties.AREA_NAME}</h2>`)}
    }).addTo(map);
})

