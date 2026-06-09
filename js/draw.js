// ✅ Feature group voor tekenen
let drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

// ✅ draw controls (alleen rechthoek/bbox)
const drawControl = new L.Control.Draw({
  draw: {
    polygon: false,
    polyline: false,
    marker: false,
    circle: false,
    rectangle: true // ✅ alleen bbox
  },
  edit: {
    featureGroup: drawnItems
  }
});

map.addControl(drawControl);

// ✅ bbox opslaan
let currentBBox = null;

// ✅ wanneer bbox wordt getekend
map.on(L.Draw.Event.CREATED, function (e) {

  drawnItems.clearLayers();

  const layer = e.layer;
  drawnItems.addLayer(layer);

  currentBBox = layer.getBounds();

  console.log("BBOX:", currentBBox.toBBoxString());
});
