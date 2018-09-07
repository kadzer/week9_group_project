const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');

const GridView = function (container) {
  this.container = container;
};

GridView.prototype.bindEvents = function () {
  Publish.subscribe('Dinosaurs:data-loaded', (event) => {
    this.render(event.detail);
  });
};

GridView.prototype.render = function (dinosaurs) {
  this.container.innerHTML = '';
  const itemView = new ItemView(this.container);
  dinosaurs.forEach((dinosaur) =>  itemView.render(dinosaur));
};





module.exports = GridView;
