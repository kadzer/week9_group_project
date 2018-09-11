const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');
const DetailView = require('./detail_view.js');

const Timeline = function (container) {
  this.container = container;
};

Timeline.prototype.bindEvents = function () {
  PubSub.subscribe('Dinosaurs:data-loaded', (event) => {
    this.render(event.detail);
  })
};

Timeline.prototype.render = function (data) {


  this.container.innerHTML = '';

  const dinosaurContainer = document.createElement('div');
  dinosaurContainer.id = 'container';

  const rightContainer = document.createElement('div');
  rightContainer.id = 'right-container';
  dinosaurContainer.appendChild(rightContainer);

  const middleContainer = document.createElement('div');
  middleContainer.id = 'middle-container';
  dinosaurContainer.appendChild(middleContainer);

  const leftContainer = document.createElement('div');
  leftContainer.id = 'left-container';
  dinosaurContainer.appendChild(leftContainer);

  dinosaurContainer.id = 'dinosaur';

  data.sort(function(a, b) {
    return b.firstAppeared - a.firstAppeared;
  });

  console.log(data);

  var eras = []


  data.forEach((dinosaur) => {

    if (!eras.includes(dinosaur.period)) {
      const era = this.createEra(dinosaur.period)
      leftContainer.appendChild(era)
      eras.push(dinosaur.period)
    }

    const name = this.createHeading(dinosaur.name);
    leftContainer.appendChild(name);

    const picture = this.createPicture(dinosaur.picture);
    leftContainer.appendChild(picture);


  })


  this.container.appendChild(dinosaurContainer);
};


Timeline.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

Timeline.prototype.createPicture = function (image) {
  const picture = document.createElement('img');
  picture.src = image;
  picture.classList.add("dino_image");
  return picture;
};

Timeline.prototype.createEra = function (period) {
const era = document.createElement('h4');
era.src = period;
era.textContent = period;
return era;
};


module.exports = Timeline;
