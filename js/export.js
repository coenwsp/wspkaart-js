function exportData() {

  if (!currentBBox) {
    alert("Geen bbox geselecteerd");
    return;
  }

  const bbox = currentBBox.toBBoxString();

  // ✅ eerste layer gebruiken (later uitbreidbaar)
  const wmsUrl = WMS_LAYERS[0].url;
  const layerName = WMS_LAYERS[0].layers;

  // ✅ GeoTIFF export (WMS)
  const geotiffUrl =
    `${wmsUrl}?service=WMS&request=GetMap` +
    `&layers=${layerName}` +
    `&bbox=${bbox}` +
    `&width=1024&height=1024` +
    `&format=image/geotiff` +
    `&crs=EPSG:4326`;

  window.open(geotiffUrl);

  // ✅ SHP export (WFS)
  const shpUrl =
    `${wmsUrl.replace('/wms', '/wfs')}?service=WFS&request=GetFeature` +
    `&typeName=${layerName}` +
    `&bbox=${bbox}` +
    `&outputFormat=shape-zip`;

  window.open(shpUrl);
}
