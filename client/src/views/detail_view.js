const PubSub = require('../helpers/pub_sub.js');

const DetailView = function (container) {
  this.container = container

};

DetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Dinosaurs:found-dino', (event) => {
    this.render(event.detail);
    this.createHeading(event.detail);
    this.createDetail(event.detail);
    this.createTextDetail(event.detail);
  })
};


DetailView.prototype.render = function (dinosaur) {
  const dinosaurContainer = document.createElement('div');
  var div = document.querySelector('div.Right')
  div.innerHTML = ""
  div.appendChild(dinosaurContainer)


  dinosaurContainer.id = 'dinosaur';

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

  this.container.appendChild(dinosaurContainer);
  console.log(this.container);
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
}




module.exports = DetailView;
