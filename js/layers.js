function loadWMSLayers(map) {
  const overlays = {};

  MAP_LAYERS.forEach(layer => {

    // ✅ standaard WMS
    if (layer.type === "wms") {

      const wmsLayer = L.tileLayer.wms(layer.url, {
        layers: layer.layers,
        format: layer.format,
        transparent: true,
        opacity: 0.6
      });

      overlays[layer.name] = wmsLayer;
    }

    // ✅ custom layer (al gebouwd)
    if (layer.type === "custom") {
      overlays[layer.name] = layer.layer;
    }

  });

  return overlays;
}
