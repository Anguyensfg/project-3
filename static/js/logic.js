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

var delayInMilliseconds = 2000; //1 second

setTimeout(function() {
  animation.pause();

  var jsonFeatures = [];
  
  function circleColor(type) {
    if (type == "house") {
      return "rgb(255,236,34)"; 
    } else if (type == "townhouse") {
      return "rgb(255,143,69)"; 
    } else if (type == "unit") {
      return "rgb(145,19,29)";
    } 
  }

  sales_json.forEach(function(point){
      var lat = point.latitude;
      var lon = point.longitude;
  
      var feature = {type: 'Feature',
          properties: point,
          geometry: {
              type: 'Point',
              coordinates: [lon,lat]
          }
      };
      
      jsonFeatures.push(feature);
  });
  
  var propertyGeoJson = { type: 'FeatureCollection', features: jsonFeatures };

    function onEachFeature(feature, layer) {
      layer.bindPopup(`<h2>${feature.properties.property_type}</h2> 
      <h4> Price: ${feature.properties.price}</h4><h4> Date: ${feature.properties.date_sold}</h4>`);
    }

  let allProperties = L.geoJSON(propertyGeoJson, {
    pointToLayer: function (feature, latlng) {
      return L.circle(latlng, {
        radius: 40,
        fillColor: circleColor(feature.properties.property_type),
        fillOpacity: 0.65,
        weight: 1,
      });
    },
    onEachFeature: onEachFeature,
  });

  var House = L.geoJson(propertyGeoJson, { 
    filter: function(feature) { return feature.properties.property_type == "house" },
    onEachFeature: onEachFeature,
  });

  var Townhouse = L.geoJson(propertyGeoJson, { 
    filter: function(feature) { return feature.properties.property_type == "townhouse" },
    onEachFeature: onEachFeature,
  });

  var Unit = L.geoJson(propertyGeoJson, { 
    filter: function(feature) { return feature.properties.property_type == "unit" },
    onEachFeature: onEachFeature,
  });
    // Create the base layers.
    let street = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );

    let sattelite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    // Create a baseMaps object.
    let baseMaps = {
      "Light Map": street,
      "Terrain Map": sattelite,
    };

        // Create an overlay object to hold our overlay.
        let overlayMaps = {
          "All Types": allProperties,
          "House": House,
          "Townhouse": Townhouse,
          "Unit": Unit
        };

    // Create our map, giving it the streetmap and mines layers to display on load.
    let myMap = L.map("map", {
      center: [-24, 120],
      zoom: 5,
      layers: [street, allProperties],
    });

    // Create a layer control.
    L.control
      .layers(baseMaps, overlayMaps, {
        collapsed: false,
      })
      .addTo(myMap);
      myMap.fitBounds(allProperties.getBounds());
}, delayInMilliseconds);

fetch(data_json)
.then(function(response){
  return response.json();
})
.then(function(data){
  let placeholder = document.querySelector("#data-output");
  let output = "";
  for (let data of rows){
    out += `
      <tr>
        <td>$data.price}</td>
        <td>$data.suburb}</td>
        <td>$data.city_name}</td>
        <td>$data.state}</td>
        <td>$data.latitude}</td>
        <td>$data.longitude}</td>
        <td>$data.bedrooms}</td>
        <td>$data.property_type}</td>
        <td>$data.postcode}</td>
        <td>$data.date_sold}</td>
      </tr>
    `;
  }

  placeholder.innerHTML = out;
});