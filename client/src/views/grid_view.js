const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');
const DetailView = require('./detail_view.js');

const GridView = function (container) {
  this.container = container;
};

GridView.prototype.bindEvents = function () {
  PubSub.subscribe('Dinosaurs:data-loaded', (event) => {
    this.renderDinoGrid(event.detail);
  });
};


GridView.prototype.renderDinoGrid = function (dinosaurs) {
  this.container.innerHTML = '';
  const dinoGrid = document.createElement('div');
  dinoGrid.id = 'dino_grid';
  this.container.appendChild(dinoGrid);
  const itemView = new ItemView(dinoGrid);
  dinosaurs.forEach((dinosaur) =>  {
    itemView.render(dinosaur);
  });
  this.createButton(dinosaurs);
  itemView.bindEvents();
};

GridView.prototype.createButton = function (dinosaurs) {
  const createButton = document.createElement("BUTTON");
  createButton.id = 'timelineButton';
  this.container.appendChild(createButton);
  createButton.addEventListener('click', (event) => {
    PubSub.publish('GridView:timelineClick', dinosaurs);
  })
};

module.exports = GridView;
