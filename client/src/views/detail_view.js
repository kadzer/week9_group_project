const PubSub = require('../helpers/pub_sub.js');
const MapWrapper = require('./map_wrapper.js');

const DetailView = function (mapWrapper) {
  this.mapWrapper = mapWrapper;
};

DetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Dinosaurs:found-dino', (event) => {
    this.render(event.detail);
    const audio = event.detail.audio;
    const image = document.querySelector('img');
    image.addEventListener('click', (event) => {
      const sound = this.createAudio(audio);
      sound.play();
    })
  })
};


DetailView.prototype.render = function (dinosaur) {
  const dinosaurContainer = document.querySelector('#dinosaurs')
  dinosaurContainer.innerHTML = ""

  const picture = this.createPicture(dinosaur.picture);
  dinosaurContainer.appendChild(picture);

  const name = this.createHeading(dinosaur.name);
  dinosaurContainer.appendChild(name);

  const pronunciation = this.createDetail('Pronunciation:  ', dinosaur.pronunciation);
  dinosaurContainer.appendChild(pronunciation);

  const meaningOfName = this.createDetail('Meaning Of Name:  ', dinosaur.meaningOfName);
  dinosaurContainer.appendChild(meaningOfName);

  const diet = this.createDetail('Diet:  ', dinosaur.diet);
  dinosaurContainer.appendChild(diet);

  const length = this.createDetail('Length:  ', dinosaur.length);
  dinosaurContainer.appendChild(length);

  const period = this.createTextDetail(`This Dinosaur lived during the ${dinosaur.period} period which was ${dinosaur.mya} million years ago.`);
  dinosaurContainer.appendChild(period);

  const info = this.createDetail('Fun Fact:  ', dinosaur.info);
  dinosaurContainer.appendChild(info);

  const mapText = this.createTextDetail('This Dinosaur lived here:  ');
  dinosaurContainer.appendChild(mapText);

  const map = this.createMap(dinosaur.latlng);
  dinosaurContainer.appendChild(map);

};

DetailView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

DetailView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `${label} ${text}`;
  return detail;
};

DetailView.prototype.createTextDetail = function (textContent) {
  const textDetail = document.createElement('p');
  textDetail.textContent = textContent;
  return textDetail;
};

DetailView.prototype.createPicture = function (image) {
  const picture = document.createElement('img');
  picture.src = image;
  picture.classList.add("dino_image");
  return picture;
};

DetailView.prototype.createMap = function (coordinates) {
  const map = this.mapWrapper.container;
  return map;
};

DetailView.prototype.createAudio = function (audio) {
  const sound = new Audio(audio);
  return sound;
};




module.exports = DetailView;
