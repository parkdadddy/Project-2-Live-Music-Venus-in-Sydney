// icons 
var beer_icon = L.icon({
  iconUrl: 'image/beer.png',
  iconSize: [15, 15],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

var clubs_icon = L.icon({
  iconUrl: 'image/record-player@3x.png',
  iconSize: [40,40],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

var bottleo_icon = L.icon({
  iconUrl: 'image/bottle.png',
  iconSize: [20,50],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

// All bars marker
/////////////////////////////////////////////
/////////////////////////////////////////////
///////////////////////////////////////////////
$.get('Raw Data/all_bars.csv', function(bars_data) {


  // Use PapaParse to convert string to array of objects
  var all_bars_data = Papa.parse(bars_data, {header: true, dynamicTyping: true}).data;

  // For each row in data, create a marker and add it to the map
  // For each row, columns `Latitude`, `Longitude`, and `Title` are required
  for (var i in all_bars_data) {
    var row = all_bars_data[i]

    var bars_marker =  L.marker([row.Latitude, row.Longitude], {
      opacity: 1,
      icon: beer_icon
    }).bindPopup('Bars Name:' + row.name + "<br>Address:" + row.vicinity)
  
    
    bars_marker.addTo(sydneyMap)
  }

})

$.get('Raw Data/all_bars.csv', function(bars_data) {


  // Use PapaParse to convert string to array of objects
  var all_bars_data = Papa.parse(bars_data, {header: true, dynamicTyping: true}).data;

  // For each row in data, create a marker and add it to the map
  // For each row, columns `Latitude`, `Longitude`, and `Title` are required
  for (var i in all_bars_data) {
    var row = all_bars_data[i]

   

    var bars_marker = L.marker([row.Latitude, row.Longitude], {
      opacity: 1,
      icon: beer_icon
    }).bindPopup('Bars Name:' + row.name + "<br>Address:" + row.vicinity)

    
    
    bars_marker.addTo(perthMap)
  }

})

// different markers for bars

//All night clubs marker
///////////////////////////////////////////////
///////////////////////////////////////////////
$.get('Raw Data/all_nc.csv', function(night_clubs_data) {


  // Use PapaParse to convert string to array of objects
  var all_nc_data = Papa.parse(night_clubs_data, {header: true, dynamicTyping: true}).data;

  // For each row in data, create a marker and add it to the map
  // For each row, columns `Latitude`, `Longitude`, and `Title` are required
  for (var i in all_nc_data) {
    var row = all_nc_data[i]

    var nc_marker = L.marker([row.Latitude, row.Longitude], {
      opacity: 1,
      icon: clubs_icon
    }).bindPopup('Clubs Name:' + row.name + "<br>Address:" + row.vicinity)
    
    nc_marker.addTo(sydneyMap)
  }

})


$.get('Raw Data/all_nc.csv', function(night_clubs_data) {


  // Use PapaParse to convert string to array of objects
  var all_nc_data = Papa.parse(night_clubs_data, {header: true, dynamicTyping: true}).data;

  // For each row in data, create a marker and add it to the map
  // For each row, columns `Latitude`, `Longitude`, and `Title` are required
  for (var i in all_nc_data) {
    var row = all_nc_data[i]

    var bottle_marker = L.marker([row.Latitude, row.Longitude], {
      opacity: 1,
      icon: clubs_icon
    }).bindPopup('Clubs Name:' + row.name + "<br>Address:" + row.vicinity)
    
    bottle_marker.addTo(perthMap)
  }

})

//All bottle shops marker
///////////////////////////////////////////////
///////////////////////////////////////////////
$.get('Raw Data/all_bottleo.csv', function(bottle_shops) {


  // Use PapaParse to convert string to array of objects
  var all_bottleo_data = Papa.parse(bottle_shops, {header: true, dynamicTyping: true}).data;

  // For each row in data, create a marker and add it to the map
  // For each row, columns `Latitude`, `Longitude`, and `Title` are required
  for (var i in all_bottleo_data) {
    var row = all_bottleo_data[i]

    var bottle_marker = L.marker([row.Latitude, row.Longitude], {
      opacity: 1,
      icon: bottleo_icon
    }).bindPopup('Clubs Name:' + row.name + "<br>Address:" + row.vicinity)
    
    bottle_marker.addTo(sydneyMap)
  }

})


$.get('Raw Data/all_nc.csv', function(night_clubs_data) {


  // Use PapaParse to convert string to array of objects
  var all_nc_data = Papa.parse(night_clubs_data, {header: true, dynamicTyping: true}).data;

  // For each row in data, create a marker and add it to the map
  // For each row, columns `Latitude`, `Longitude`, and `Title` are required
  for (var i in all_nc_data) {
    var row = all_nc_data[i]

    var nc_marker = L.marker([row.Latitude, row.Longitude], {
      opacity: 1,
      icon: bottleo_icon
    }).bindPopup('Clubs Name:' + row.name + "<br>Address:" + row.vicinity)
    
    nc_marker.addTo(perthMap)
  }

})


var sydneyMap= L.map("map", {
  center: [-33.8734, 151.2242],
  zoom: 13,
  // layers: [darkmap]
});
  
// tile layer
var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "dark-v10",
    accessToken: API_KEY
  }).addTo(sydneyMap);

  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "light-v10",
    accessToken: API_KEY
  });


var perthMap= L.map("map_1", {
    center: [-31.9436, 115.8538],
    zoom: 13
  });
    
    // tile layer
var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: "mapbox/light-v9",
      accessToken: API_KEY
    }).addTo(perthMap);


var basemaps = {
      "Light Map" : lightmap,
      "Dark Map" : darkmap
    };

// var sydneyMap = L.map("map", {
//       center: [-33.8734, 151.2242],
//       zoom: 13,
//       // layers: [darkmap]
//     }).addTo(sydneyMap);
    
// L.control.layers(basemaps, overlayMaps, {
//       collapsed: false
//     }).addTo(sydneyMap);
    

// radius as study areas
L.circle([-33.8734, 151.2242], {radius: 3000 }).addTo(sydneyMap);
L.circle([-33.9087, 151.1524], {radius: 3000 }).addTo(sydneyMap);
L.circle([-31.9436, 115.8538], {radius: 3000}).addTo(perthMap);


