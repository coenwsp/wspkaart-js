const MAP_LAYERS = [

  {
    type: "wms",
    name: "AHN hoogte",
    url: "https://service.pdok.nl/rws/ahn/wms/v1_0",
    layers: "ahn3_05m_dtm",
    format: "image/png",
    transparent: true,
    opacity: 0.6
  },

  {
    type: "custom",
    name: "G: Provincies",
    layer: L.tileLayer.wms(
      'https://service.pdok.nl/cbs/gebiedsindelingen/2023/wms/v1_0',
      {
        layers: 'provincie_gegeneraliseerd',
        format: 'image/png',
        transparent: true,
        opacity: 0.5
      }
    )
  },

  {
    type: "custom",
    name: "G: Gemeenten",
    layer: L.layerGroup([
      L.tileLayer.wms('https://service.pdok.nl/cbs/gebiedsindelingen/2023/wms/v1_0', {
        layers: 'gemeente_gegeneraliseerd',
        format: 'image/png',
        transparent: true,
        opacity: 0.6
      }),
      L.tileLayer.wms('https://service.pdok.nl/cbs/gebiedsindelingen/2023/wms/v1_0', {
        layers: 'gemeente_labelpoint',
        format: 'image/png',
        transparent: true,
        opacity: 0.8
      })
    ])
  }

];
