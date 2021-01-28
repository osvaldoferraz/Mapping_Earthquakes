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

//Add an array containing each city's location, state, and population
let cities =[{
    location: [40.7128, -74.0059],
    city: 'New York City',
    state: 'NY',
    population: 8398748
},
{
location: [41.8781, -87.6298],
  city: "Chicago",
  state: "IL",
  population: 2705994
},
{
  location: [29.7604, -95.3698],
  city: "Houston",
  state: "TX",
  population: 2325502
},
{
  location: [34.0522, -118.2437],
  city: "Los Angeles",
  state: "CA",
  population: 3990456
},
{
  location: [33.4484, -112.0740],
  city: "Phoenix",
  state: "AZ",
  population: 1660272
}
];

// for (let i=0; i < cities.length; i++)

cities.forEach(city => console.log(city))

// add cities to the map by adding to the marker function
cities.forEach(city => {
    console.log(city)
    L.marker(city.location)
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
