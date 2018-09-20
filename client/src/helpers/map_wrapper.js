const keys = require('../../config/keys');

const mapWrapper = function(name, location, continent) {
  const mapFrame = document.createElement('iframe');
  mapFrame.classList.add('map');
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${keys.gmaps}&zoom=5`
  mapFrame.src = mapSrc;
  mapFrame.height = '450';
  return mapFrame;
}

module.exports = mapWrapper;
