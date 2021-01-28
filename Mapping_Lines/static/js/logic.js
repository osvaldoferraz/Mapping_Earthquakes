// Add console.log to check to see if our code is working
console.log('working');

// Create the map object with a center and zoom lelvel
// let map = L.map('mapid').setView([40.7, -94.5], 4);
let map = L.map('mapid', {
    center: [
        37.6213, -122.3790
    ],
    zoom: 5
}); 

// Coordinates for each point to be used in the line
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
]

// Create a polyline using the line coordinates and make the line red
L.polyline(line, {
    color: "yellow"
}).addTo(map)

// //Get data from cities.js
// let cityData = cities


// // change the marker for each city to a circle that has the radius equivalent to the city's population
// cityData.forEach(city => {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000
//     })
//     .bindPopup(`<h2>${city.city}, ${city.state}</h2><hr><h3>Population ${city.population.toLocaleString()}<h3>`)
//     .addTo(map);
// })



// We create a tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//Sill Drill
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

streets.addTo(map);
