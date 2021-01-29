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
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

L.control.layers(baseMaps).addTo(map);

// let torontoHoods = 'https://raw.githubusercontent.com/osvaldoferraz/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json'

// //SKILL DRILL
// Create a style for the polygons
// let myStyle = {
//     color: "blue",
//     fillColor: 'yellow',
//     weight: 1
// }

// Grabbin our GeoJSON Data
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson').then(function(data) {
    console.log(data);
    //Creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {
        // We turn each feature into a circleMarker on the map
        pointToLayer: function(feature, latlng) {
            console.log(data);
            return L.circleMarker(latlng);
        },
    style: styleInfo
    }).addTo(map);
});

    // This function returns the style data for each of the earthquakes we plot on
    // the map. We pass the magnitude of the earthquake into a function
    // to calculate the radius.
    function styleInfo(feature) {
        return {
            opacity: 1,
            fillOpacity: 1,
            fillColor: "#ffae42",
            color: '#000000',
            radius: getRadius(feature.properties.mag),
            stroke: true,
            weight: 0.5
        }
    };
    
        // This function determines the radius of the earthquake marker based on its magnitude.
        // Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
    function getRadius(magnitude) {
            if (magnitude === 0) {
                return 1;    
            }
            return magnitude * 4;
        };



