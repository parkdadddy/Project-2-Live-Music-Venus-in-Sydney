var sydneyMap= L.map("map", {
    center: [-33.8734, 151.2242],
    zoom: 13
  });
    
    // tile layer
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: "mapbox/light-v9",
      accessToken: API_KEY
    }).addTo(sydneyMap);

var perthMap= L.map("map_1", {
      center: [-31.9436, 115.8538],
      zoom: 13
    });
      
      // tile layer
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/light-v9",
        accessToken: API_KEY
      }).addTo(perthMap);
  

// radius as study areas
L.circle([-33.8734, 151.2242], {radius: 3000 }).addTo(sydneyMap);
L.circle([-33.9087, 151.1524], {radius: 3000 }).addTo(sydneyMap);


L.circle([-31.9436, 115.8538], {radius: 3000}).addTo(perthMap);

// All bars marker
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////


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



$.get('Raw Data/all_bars.csv', function(bars_data) {


  // Use PapaParse to convert string to array of objects
  var all_bars_data = Papa.parse(bars_data, {header: true, dynamicTyping: true}).data;

  // For each row in data, create a marker and add it to the map
  // For each row, columns `Latitude`, `Longitude`, and `Title` are required
  for (var i in all_bars_data) {
    var row = all_bars_data[i]

    var marker = L.marker([row.Latitude, row.Longitude], {
      opacity: 1,
      icon: beer_icon
    }).bindPopup('Bars Name:' + row.name + "<br>Address:" + row.vicinity)
    
    marker.addTo(sydneyMap)
  }

})

$.get('Raw Data/all_bars.csv', function(bars_data) {


  // Use PapaParse to convert string to array of objects
  var all_bars_data = Papa.parse(bars_data, {header: true, dynamicTyping: true}).data;

  // For each row in data, create a marker and add it to the map
  // For each row, columns `Latitude`, `Longitude`, and `Title` are required
  for (var i in all_bars_data) {
    var row = all_bars_data[i]

   

    var marker = L.marker([row.Latitude, row.Longitude], {
      opacity: 1,
      icon: beer_icon
    }).bindPopup('Bars Name:' + row.name + "<br>Address:" + row.vicinity)


    
    marker.addTo(perthMap)
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

    var marker = L.marker([row.Latitude, row.Longitude], {
      opacity: 1,
      icon: clubs_icon
    }).bindPopup('Clubs Name:' + row.name + "<br>Address:" + row.vicinity)
    
    marker.addTo(sydneyMap)
  }

})


$.get('Raw Data/all_nc.csv', function(night_clubs_data) {


  // Use PapaParse to convert string to array of objects
  var all_nc_data = Papa.parse(night_clubs_data, {header: true, dynamicTyping: true}).data;

  // For each row in data, create a marker and add it to the map
  // For each row, columns `Latitude`, `Longitude`, and `Title` are required
  for (var i in all_nc_data) {
    var row = all_nc_data[i]

    var marker = L.marker([row.Latitude, row.Longitude], {
      opacity: 1,
      icon: clubs_icon
    }).bindPopup('Clubs Name:' + row.name + "<br>Address:" + row.vicinity)
    
    marker.addTo(perthMap)
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

    var marker = L.marker([row.Latitude, row.Longitude], {
      opacity: 1,
      icon: bottleo_icon
    }).bindPopup('Clubs Name:' + row.name + "<br>Address:" + row.vicinity)
    
    marker.addTo(sydneyMap)
  }

})


$.get('Raw Data/all_nc.csv', function(night_clubs_data) {


  // Use PapaParse to convert string to array of objects
  var all_nc_data = Papa.parse(night_clubs_data, {header: true, dynamicTyping: true}).data;

  // For each row in data, create a marker and add it to the map
  // For each row, columns `Latitude`, `Longitude`, and `Title` are required
  for (var i in all_nc_data) {
    var row = all_nc_data[i]

    var marker = L.marker([row.Latitude, row.Longitude], {
      opacity: 1,
      icon: bottleo_icon
    }).bindPopup('Clubs Name:' + row.name + "<br>Address:" + row.vicinity)
    
    marker.addTo(perthMap)
  }

})


// nsw suburbs boundaries

nsw_suburbs_url = 'https://data.gov.au/geoserver/nsw-suburb-locality-boundaries-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_91e70237_d9d1_4719_a82f_e71b811154c6&outputFormat=json?'

var boundaries = d3.json(nsw_suburbs_url, function(bound){
  
      console.log(bound);
})




d3.json('Raw Data/night_clubs_sydney.json', function(night_clubs_sydney){
console.log(night_clubs_sydney);
});





// url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson?"
  
// var earth = d3.json(url, function(earthquake){
  
//     console.log(earthquake);
  
//     // color based on depth
//     function markerColor(d) {
//       if (d < 1){
//         return "#9ffa8c"
//       }
//       else if ( d < 2){
//         return "#86f56e"
//       }
//       else if (d < 3){
//         return "#77eb5e"
//       }
//       else if (d < 4){
//         return "#65e649"
//       }
//       else if (d < 5 ){
//         return "#51e332"
//       }
//       else {
//         return "#33c714"
//       }
//     };
  
//   // size based on magnitude
//   function markerSize(magnitude){
//     return magnitude * 5;
//   }
  
//   function style(feature) {
//     return {
//       opacity: 1,
//       fillOpacity: 1,
//       fillColor: markerColor(feature.geometry.coordinates[2]),
//       color: "white",
//       radius: markerSize(feature.properties.mag),
//       stroke: true,
//       weight: 0.5
//     };
//   }
  
//   L.geoJson(earthquake, {
//     pointToLayer: function(feature, latlng) {
//       return L.circleMarker(latlng);
//     },
//     style: style,
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("Location: " + feature.properties.place + "<br>Magnitude: " + feature.properties.magnitude + "<br>Depth: " + feature.geometry.coordinates[2]);
//     }
  
//   }).addTo(myMap);
  
  
//   var legend = L.control({position: "bottomright" });
  
//   legend.onAdd = function() {
//     var div = L
//       .DomUtil
//       .create("div", "info legend");
  
//     var grades = [0, 1, 2, 3, 4, 5]
//     var labels = [
//                "#9ffa8c",
//                "#86f56e",
//                "#77eb5e",
//                "#65e649",
//                "#51e332",
//                "#33c714"
//               ]; 
  
  
//     for (var i = 0; i < grades.length; i++) {
//       div.innerHTML += "<i style='background: " + labels[i] + "'></i> " +
//         grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
//     }
//     return div;
//   };
  
  
//   legend.addTo(myMap);
//   });
//   console.log(earth);


// // getting the tectonic data

// var tec = d3.json("static/PB2002_boundaries.json", function (tectonic){
//   console.log(tectonic);
  
  
//   L.geoJSON(tectonic, {
//     style: function (feature) {
//         return {color: 'orange'};
//     }
//   }).bindPopup(function (layer) {
//     return layer.feature.properties.Name;
//   });
 
// });

// // tile layer
// var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//       attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//       maxZoom: 18,
//       id: "dark-v10",
//       accessToken: API_KEY
//     });

// var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//       attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//       maxZoom: 18,
//       id: "dark-v10",
//       accessToken: API_KEY
//     });

// var staellite = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//       attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//       maxZoom: 18,
//       id: "dark-v10",
//       accessToken: API_KEY
//     });

// // two separa layer groups

// var earthquakes = L.layerGroup(earthquake);
// var techton = L.layerGroup(tec);
// console.log(techton);

// var basemaps = {
//   "Light Map" : lightmap,
//   "Dark Map" : darkmap,
//   "Staellite" : staellite
// };

// var overlayMaps = {
//   "Earthquakes": earthquakes,
//   "Techtonic Data": techton
// };

// var myMap = L.map("map", {
//   center: [37.0902, -95.7129],
//   zoom: 5,
//   layers: [staellite, earthquakes,techton]
// });

// L.control.layers(basemaps, overlayMaps, {
//   collapsed: false
// }).addTo(myMap);


