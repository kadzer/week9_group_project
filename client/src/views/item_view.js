const PubSub = require('../helpers/pub_sub.js');

const ItemView = function (container, dinosaur) {
  this.container = container;
};
//
// ItemView.prototype.bindEvents = function () {
//   const gridElement = document.querySelector('#dinosaur');
//   gridElement.addEventListener('click', (event) => {
//     const selectedIndex = event.target.value;
//     PubSub.publish('GridView:Change', selectedIndex);
//     console.log(event);
//   });
// };

ItemView.prototype.render = function (dinosaur) {
  const dinosaurContainer = document.createElement('div');
  dinosaurContainer.id = 'dinosaur';

  const dinosaurCard = document.createElement('div');
  dinosaurCard.setAttribute('class', 'card');

  const name = this.createHeading(dinosaur.name);
  dinosaurCard.appendChild(name);

  // const pronunciation = this.createDetail('Pronunciation', dinosaur.pronunciation);
  // dinosaurCard.appendChild(pronunciation);
  //
  // const meaningOfName = this.createDetail('Meaning Of Name', dinosaur.meaningOfName);
  // dinosaurCard.appendChild(meaningOfName);
  //
  // const diet = this.createDetail('Diet', dinosaur.diet);
  // dinosaurCard.appendChild(diet);
  //
  // const length = this.createDetail('Length', dinosaur.length);
  // dinosaurCard.appendChild(length);
  //
  // const period = this.createTextDetail(`This Dinosaur lived during the ${dinosaur.period} period which was ${dinosaur.mya} million years ago.`);
  // dinosaurCard.appendChild(period);
  //
  // const info = this.createDetail('Fun Fact', dinosaur.info);
  // dinosaurCard.appendChild(info);

  dinosaurContainer.appendChild(dinosaurCard);
  this.container.appendChild(dinosaurContainer);

};




ItemView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

ItemView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `${label}${text}`;
  return detail;
};

ItemView.prototype.createTextDetail = function (textContent) {
  const textDetail = document.createElement('p');
  textDetail.textContent = textContent;
  return textDetail;
};




module.exports = ItemView;
