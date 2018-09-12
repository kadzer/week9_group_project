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
  PubSub.subscribe('Dinosaurs:data-sorted', (event) => {
    this.renderDinoGrid(event.detail);
  })
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

  itemView.bindEvents();
};



module.exports = GridView;
