// Add console.log to check to see if our code is working
console.log('working');

// Create the map object with a center and zoom lelvel
// let map = L.map('mapid').setView([40.7, -94.5], 4);
let map = L.map('mapid', {
    center: [
        49, -97
    ],
    zoom: 4
}); 

// Coordinates for each point to be used in the line
let line = [
    [33.9416, -118.4085],
    [30.1975, -97.6664],
    [49.9098, -97.2365],
    [43.6777, -79.6248], 
    [40.6413, -73.7781]
]

// Create a polyline using the line coordinates and make the line red
// L.polyline(line, {
//     color: "yellow"
// }).addTo(map)

//Skill Drill
L.polyline(line, {
    color: "blue",
    dashArray: 10,
    weight: 4, 
    opacity: 0.5
}).addTo(map)



// We create a tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//Sill Drill
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

streets.addTo(map);
