document.getElementById('uploadGeoJSON').addEventListener('change', function (e) {

  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const geojson = JSON.parse(reader.result);

    const layer = L.geoJSON(geojson).addTo(map);

    map.fitBounds(layer.getBounds());

    currentBBox = layer.getBounds();
  };

  reader.readAsText(file);
});
