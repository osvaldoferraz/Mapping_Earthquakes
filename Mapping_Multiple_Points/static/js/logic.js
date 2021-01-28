// Add console.log to check to see if our code is working
console.log('working');

// Create the map object with a center and zoom lelvel
// let map = L.map('mapid').setView([40.7, -94.5], 4);
let map = L.map('mapid', {
    center: [
        34.0522, -118.2437
    ],
    zoom: 14
}); 


//Get data from cities.js
let cityData = cities

// add cities to the map by adding to the marker function
// cityData.forEach(city => {
//     console.log(city)
//     L.marker(city.location)
//     .bindPopup(`<h2>${city.city}, ${city.state}</h2><hr><h3>Population ${city.population.toLocaleString()}<h3>`)
//     .addTo(map);
// })

// change the marker for each city to a circle that has the radius equivalent to the city's population
// cityData.forEach(city => {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000
//     })
//     .bindPopup(`<h2>${city.city}, ${city.state}</h2><hr><h3>Population ${city.population.toLocaleString()}<h3>`)
//     .addTo(map);
// })

//Skill Drill
cityData.forEach(city => {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/200000,
        color: "orange",
        weight: 4,

    })
    .bindPopup(`<h2>${city.city}, ${city.state}</h2><hr><h3>Population ${city.population.toLocaleString()}<h3>`)
    .addTo(map);
})

// Skill Drill
// let marker = L.circle([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: 'lightyellow',
//     weight: 3,
//     radius: 300
// }).addTo(map)

// //Add a marker too the map for Winnipeg, MB
// let markerWin = L.marker([49.8951, -97.1384]).addTo(map)

//Add a circle to 

// We create a tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//Sill Drill
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

streets.addTo(map);
