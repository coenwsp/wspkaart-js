// ✅ Maak kaart aan (DIT IS VERPLICHT)
const map = L.map('map').setView(DEFAULT_VIEW.center, DEFAULT_VIEW.zoom);

// ✅ Basemap (OSM)
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// ✅ WMS lagen laden
const overlayMaps = loadWMSLayers(map);

// ✅ Layer control
L.control.layers({ "OSM": osm }, overlayMaps).addTo(map);
