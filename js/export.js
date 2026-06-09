function exportData() {

  if (!currentBBox) {
    alert("Geen bbox geselecteerd");
    return;
  }

  const bbox = currentBBox.toBBoxString();

  const wmsUrl = WMS_LAYERS[0].url;
  const layerName = WMS_LAYERS[0].layers;

  const geotiffUrl =
    `${wmsUrl}?service=WMS&request=GetMap` +
    `&layers=${layerName}` +
    `&bbox=${bbox}` +
    `&width=1024&height=1024` +
    `&format=image/geotiff` +
    `&crs=EPSG:4326`;

  window.open(geotiffUrl);

  const shpUrl =
    `${wmsUrl.replace('/wms', '/wfs')}?service=WFS&request=GetFeature` +
    `&typeName=${layerName}` +
    `&bbox=${bbox}` +
    `&outputFormat=shape-zip`;

  window.open(shpUrl);
}
``
