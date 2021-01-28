// Add console.log to check to see if our code is working
console.log('working');

// Create the map object with a center and zoom lelvel
// let map = L.map('mapid').setView([40.7, -94.5], 4);
let map = L.map('mapid').setView([37.5, -122.5],10);

// We create a tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//Sill Drill
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

streets.addTo(map);

// Grabbin our GeoJSON Data
d3.json(airportData).then(function(data){
    console.log(data);
    //Creating a GeoJSON layer with the retrieved data
    L.geoJason(data).addTo(map);
})

