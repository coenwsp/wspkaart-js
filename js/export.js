function exportData() {

  if (shape-zip`;  if (!currentBBox) {

  window.open(shpUrl);
}
    alert("Geen bbox geselecteerd");
    return;
  }

  const bbox = currentBBox.toBBoxString();

  // ✅ PAS HIER AAN ALS JE ANDERE SERVICE HEBT
  const wmsUrl = WMS_LAYERS[0].url;
  const layerName = WMS_LAYERS[0].layers;

  // GeoTIFF export
  const geotiffUrl =
    `${wmsUrl}?service=WMS&request=GetMap` +
    `&layers=${layerName}` +
    `&bbox=${bbox}` +
    `&width=1024&height=1024` +
    `&format=image/geotiff` +
    `&crs=EPSG:4326`;

  window.open(geotiffUrl);

  // WFS -> SHP (indien ondersteund)
  const shpUrl =
    `${wmsUrl.replace('/wms', '/wfs')}?service=WFS&request=GetFeature` +
    `&typeName=${layerName}` +
    `&bbox=${bbox}` +

