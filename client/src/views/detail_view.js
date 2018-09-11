const PubSub = require('../helpers/pub_sub.js');

const DetailView = function () {
};

DetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Dinosaurs:found-dino', (event) => {
    this.render(event.detail);
  })
};


DetailView.prototype.render = function (dinosaur) {
  const dinosaurContainer = document.querySelector('#dinosaurs')
  dinosaurContainer.innerHTML = ""

  const picture = this.createPicture(dinosaur.picture);
  dinosaurContainer.appendChild(picture);

  const name = this.createHeading(dinosaur.name);
  dinosaurContainer.appendChild(name);

  const pronunciation = this.createDetail('Pronunciation', dinosaur.pronunciation);
  dinosaurContainer.appendChild(pronunciation);

  const meaningOfName = this.createDetail('Meaning Of Name', dinosaur.meaningOfName);
  dinosaurContainer.appendChild(meaningOfName);

  const diet = this.createDetail('Diet', dinosaur.diet);
  dinosaurContainer.appendChild(diet);

  const length = this.createDetail('Length', dinosaur.length);
  dinosaurContainer.appendChild(length);

  const period = this.createTextDetail(`This Dinosaur lived during the ${dinosaur.period} period which was ${dinosaur.mya} million years ago.`);
  dinosaurContainer.appendChild(period);

  const info = this.createDetail('Fun Fact', dinosaur.info);
  dinosaurContainer.appendChild(info);

  const audio = this.createAudio(dinosaur.audio);
  dinosaurContainer.appendChild(audio);

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

DetailView.prototype.createAudio = function (audio) {
  const button = document.createElement('img');
  button.src = 'images/play.png';
  button.classList.add("play");
  button.addEventListener('click', (event) => {
    const sound = document.createElement('audio');
    audio.src = audio;
    console.log(audio);
    audio.play();

  })
  return button;
  return sound;
};




module.exports = DetailView;
