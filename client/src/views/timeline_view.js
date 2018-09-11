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

  dinosaurContainer.displayDinosaurs();

};

Timeline.prototype.displayDinosaurs = function () {

  const itemView = new ItemView(dinoGrid);
  dinosaurs.forEach((dinosaur) =>  {
    itemView.render(dinosaur);
  });
  itemView.bindEvents();
};



module.exports = Timeline;
