const map = L.map('map').setView(DEFAULT_VIEW.center, DEFAULT_VIEW.zoom);const map = L.map('map = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'OSM'
}).addTo(map);

// laad WMS lagen
const overlayMaps = loadWMSLayers(map);

// layer control
L.control.layers({ "OSM": osm }, overlayMaps).addTo(map);
``

// base layer

