const PubSub = require('../helpers/pub_sub.js');

const ItemView = function (container, dinosaur) {
  this.container = container;
};

ItemView.prototype.bindEvents = function () {
  const gridElements = document.querySelectorAll('.card');
  gridElements.forEach((element) => {
    element.addEventListener('click', (event) => {
      const selectedDinosaur = event.target.parentElement.textContent;
      PubSub.publish('GridView:Change', selectedDinosaur);
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


ItemView.prototype.createPicture = function (image) {
  const picture = document.createElement('img');
  picture.src = image;
  picture.classList.add("dino_image");
  return picture;
};


module.exports = ItemView;
