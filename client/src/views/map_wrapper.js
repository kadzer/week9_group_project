const PubSub = require('../helpers/pub_sub');

const MapWrapper = function (container) {
  this.container = container;
  this.map = L.map(this.container)
  this.osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
};

MapWrapper.prototype.bindEvents = function () {
  PubSub.subscribe('Dinosaurs:found-dino', (event) => {
    const dinosaur = event.detail;
    const dinoCoordinates = dinosaur.latlng;
    console.log(dinoCoordinates);
    this.map.setView(dinoCoordinates, 5).addLayer(this.osmLayer);
    const marker = L.marker(dinoCoordinates)
    marker.addTo(this.map);
  })
};

module.exports = MapWrapper;
