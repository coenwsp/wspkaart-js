const MAP_LAYERS = [

  {
    type: "wms",
    name: "AHN hoogte",
    url: "https://service.pdok.nl/rws/ahn/wms/v1_0",
    layers: "ahn3_05m_dtm",
    format: "image/png",
    transparent: true,
    opacity: 0.6,
    minZoom: 6
  },

  {
    type: "wms",
    name: "Provincies",
    url: "https://service.pdok.nl/cbs/gebiedsindelingen/2023/wms/v1_0",
    layers: "provincie_gegeneraliseerd",
    format: "image/png",
    transparent: true,
    opacity: 0.5
  },

  {
    type: "wms",
    name: "Gemeenten",
    url: "https://service.pdok.nl/cbs/gebiedsindelingen/2023/wms/v1_0",
    layers: "gemeente_gegeneraliseerd",
    format: "image/png",
    transparent: true,
    opacity: 0.5
  }

];
