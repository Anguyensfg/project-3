// Anime.js - https://animejs.com/ - Welcome Screen
var animation = anime ({
  targets: 'div.box',
  translateY: [
      {value: 200, duration: 500},
      {value:0, duration: 800}  
  ],
  rotate: {
  value: '1turn',
  },
  borderRadius: 50,
  direction: 'alternate',
  easing: 'easeInOutQuad',
  delay: function() { return anime.random(0, 1000); },
  // autoplay: false,
  loop: true,
  elasticity: 200 
 
});
animation.play();

var delayInMilliseconds = 5000; //1 second

setTimeout(function() {
  animation.pause();
  var map = L.map('map', {
    center: [-25.27, 133.77], // EDIT latitude, longitude to re-center map
    zoom: 5,  // EDIT from 1 to 18 -- decrease to zoom out, increase to zoom in
    scrollWheelZoom: false,
    tap: false
  });

  /* Control panel to display map layers */
  var controlLayers = L.control.layers( null, null, {
    position: "topright",
    collapsed: false
  }).addTo(map);

  // display Carto basemap tiles with light features and labels
  var light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
  }).addTo(map); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
  controlLayers.addBaseLayer(light, 'Carto Light basemap');

  /* Stamen colored terrain basemap tiles with labels */
  var terrain = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
  }); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
  controlLayers.addBaseLayer(terrain, 'Stamen Terrain basemap');

  // see more basemap options at https://leaflet-extras.github.io/leaflet-providers/preview/
  // Read markers data from data.csv
  var markers = L.markerClusterGroup();
  $.get('./data/data.csv', function(csvString) {

    // Use PapaParse to convert string to array of objects
    var data = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;

    // For each row in data, create a marker and add it to the map
    // For each row, columns `Latitude`, `Longitude`, and `Title` are required
    for (var i in data) {
      var row = data[i];

      var marker = L.marker([row.lat, row.lon], {
        opacity: 1
      }).bindPopup(row.Title);
      markers.addLayer(marker);
    }
    });
    map.addLayer(markers)

  
}, delayInMilliseconds);
