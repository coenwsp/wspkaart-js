function loadWMSLayers(map) {
  const overlays = {};

  WMS_LAYERS.forEach(layer => {

    const wmsLayer = L.tileLayer.wms(layer.url, {
  layers: layer.layers,
  format: layer.format,
  transparent: true,
  version: '1.3.0',
  crs: L.CRS.EPSG3857
});

    overlays[layer.name] = wmsLayer;
  });

  return overlays;
}
