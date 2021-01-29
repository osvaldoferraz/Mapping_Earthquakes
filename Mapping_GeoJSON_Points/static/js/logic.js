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
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//Create a base layer taht holds both maps
let baseMaps = {
    Street: streets,
    Dark: dark
};


let airportData = 'https://raw.githubusercontent.com/osvaldoferraz/Mapping_Earthquakes/main/majorAirports.json'

// Grabbin our GeoJSON Data
d3.json(airportData).then(function(data){
    console.log(data);
    //Creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {
        onEachFeature: function(features, details) {
        details.bindPopup(`<h2>Airpot code: ${features.properties.faa}</h2><hr><h3>Airport Name: ${features.properties.name}`)}
    }).addTo(map);
})

//Skill Drill
// let popUp = airportData.forEach(data => data.bindPopup(`<h2>Airpot code: ${features.properties.faa}</h2>`))
// popUp.addTo(map)
// bindPopup(`<h2>Airpot code: ${features.properties.faa}</h2>`)