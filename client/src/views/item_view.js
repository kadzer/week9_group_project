const PubSub = require('../helpers/pub_sub.js');

const ItemView = function (container, dinosaur) {
  this.container = container;
};

ItemView.prototype.bindEvents = function () {
  const gridElements = document.querySelectorAll('.card');
  gridElements.forEach((element) => {
    element.addEventListener('click', (event) => {
      const selectedDinosaur = event.target.innerText;
      PubSub.publish('GridView:Change', selectedDinosaur);
      console.log(selectedDinosaur);
    })
  });
}

ItemView.prototype.render = function (dinosaur) {
  const dinosaurContainer = document.createElement('div');
  dinosaurContainer.id = 'dinosaur';

  const dinosaurCard = document.createElement('div');
  dinosaurCard.setAttribute('class', 'card');

  const name = this.createHeading(dinosaur.name);
  dinosaurCard.appendChild(name);

  const picture = this.createPicture(dinosaur.picture);
  dinosaurCard.appendChild(picture);


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

ItemView.prototype.createPicture = function (image) {
  const picture = document.createElement('img');
  picture.src = image;
  return picture;
};


module.exports = ItemView;
