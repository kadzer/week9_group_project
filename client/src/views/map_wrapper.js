const PubSub = require('../helpers/pub_sub');

const MapWrapper = function (container) {
  this.container = container;
  this.map = L.map(this.container)
  this.osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  this.markers = []
};

MapWrapper.prototype.bindEvents = function () {
  PubSub.subscribe('Dinosaurs:found-dino', (event) => {
    this.markers.forEach((marker)=>{
      this.map.removeLayer(marker);
    });
    const dinosaur = event.detail;
    const dinoCoordinates = dinosaur.latlng;
    this.map.setView(dinoCoordinates, 5).addLayer(this.osmLayer);
    const marker = L.marker(dinoCoordinates)
    this.markers.push(marker)
    marker.addTo(this.map);
  });
};

module.exports = MapWrapper;
