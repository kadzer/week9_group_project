const PubSub = require('../helpers/pub_sub');
const GoogleMaps = require('google-maps');

const MapView = function (container, options) {
  this.container = container;
  this.options = options;
  this.google = null;
  this.googleMap = null;
  this.key = 'AIzaSyBU-bUuBNf2TG0uDf3uoH0jwboRfEmTF0g';
};

MapView.prototype.render = function () {
  // const dinoContainer = document.querySelector('#dinosaurs')
  // dinoContainer.appendChild(this.container);

  GoogleMaps.key = this.key;

  GoogleMaps.load((google) => {
    this.google = google;
    this.googleMap = new google.maps.Map(this.container, this.options);
  });

};

// Google maps
// const MapWrapper = function (container) {
//   this.container = container;
//   this.map = L.map(this.container)
//   this.osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
// };




// GoogleMaps.load((google) => {
//   this.google = google;
//   this.googleMap = new google.maps.Map(this.container, this.options);
// });

MapView.prototype.bindEvents = function () {
  this.render();
  PubSub.subscribe('Dinosaurs:found-dino', (event) => {
    const dinosaur = event.detail;
    const dinoCoordinates = dinosaur.latlng;
    console.log("Dino coordinates", dinoCoordinates);
    this.map.setView(dinoCoordinates, 5).addLayer(this.osmLayer);
    const marker = L.marker(dinoCoordinates)
    marker.addTo(this.map);
    this.map.invalidateSize();
  })
};

module.exports = MapView;
