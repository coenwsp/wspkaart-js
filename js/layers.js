function loadWMSLayers(map) {
  const overlays = {};

  WMS_LAYERS.forEach(layer => {

    const wmsLayer = L.tileLayer.wms(layer.url, {
      layers: layer.layers,
      format: layer.format,
      transparent: true
    });

    overlays[layer.name] = wmsLayer;
  });

  return overlays;
}
