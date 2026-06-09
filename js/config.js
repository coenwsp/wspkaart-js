// ✅ HIER voeg je al je WMS lagen toe// ✅ HIER voeg je al je_LAYERS = [
  {
    name: "AHN hoogte",
    url: "https://service.pdok.nl/rws/ahn/wms/v1_0",
    layers: "ahn3_05m_dtm",
    format: "image/png"
  },
  {
    name: "Waterkaart",
    url: "https://geodata.nationaalgeoregister.nl/wateren/wms",
    layers: "waterdeel",
    format: "image/png"
  }
];

// NIET aanpassen
const DEFAULT_VIEW = {
  center: [52.1, 5.1],
  zoom: 8
};

