// Add console.log to check to see if our code is working
console.log('working');

// Create the map object with a center and zoom lelvel
// let map = L.map('mapid').setView([40.7, -94.5], 4);
let map = L.map('mapid').setView([37.5, -122.5],10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// // Grabbin our GoeJSON Data
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup(`<h2>${feature.properties.city}</h2>`)
//     }
// }).addTo(map)

// SKILL DRILL
L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map
    pointToLayer: function(feature, latlng) {
        console.log(feature);
        return L.marker(latlng)
        .bindPopup(`<h3>${feature.properties.name}</h3><hr>
        <h4>${feature.properties.city}, ${feature.properties.country}</h4>`)
    }
}).addTo(map)




// We create a tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//Sill Drill
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

streets.addTo(map);
