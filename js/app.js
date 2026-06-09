const map = L.map('map').setView(DEFAULT_VIEW.center, DEFAULT_VIEW.zoom);

const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

const overlayMaps = loadWMSLayers(map);

L.control.layers({ "OSM": osm }, overlayMaps).addTo(map);
``
