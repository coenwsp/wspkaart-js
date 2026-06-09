let drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

const drawControl = new L.Control.Draw({
  draw: {
    polygon: false,
    polyline: false,
    marker: false,
    circle: false,
    rectangle: true
  },
  edit: {
    featureGroup: drawnItems
  }
});

map.addControl(drawControl);

let currentBBox = null;

map.on(L.Draw.Event.CREATED, function (e) {

  drawnItems.clearLayers();

  const layer = e.layer;
  drawnItems.addLayer(layer);

  currentBBox = layer.getBounds();

  console.log("BBOX:", currentBBox.toBBoxString());
});
