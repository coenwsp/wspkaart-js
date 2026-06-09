function loadWMSLayers(map) {
  const overlays = {};

  MAP_LAYERS.forEach(layer => {

    const wmsLayer = L.tileLayer.wms(layer.url, {
      layers: layer.layers,
      format: layer.format,
      transparent: layer.transparent,
      opacity: layer.opacity
    });

    overlays[layer.name] = wmsLayer;
  });

  return overlays;
}
