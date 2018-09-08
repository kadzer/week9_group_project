const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');

const GridView = function (container) {
  this.container = container;
};

GridView.prototype.bindEvents = function () {
  PubSub.subscribe('Dinosaurs:data-loaded', (event) => {
    this.render(event.detail);
    this.renderNames(event.detail);
  });
};

GridView.prototype.render = function (dinosaurs) {
  this.container.innerHTML = '';
  const itemView = new ItemView(this.container);
  dinosaurs.forEach((dinosaur) =>  itemView.render(dinosaur));
};

GridView.prototype.renderNames = function (dinosaurs) {
  dinosaurs.forEach((dinosaur) => {
    const option = this.createNamesElement(dinosaur);
    this.container.appendChild(option);
    // console.log(option);
  })
};

GridView.prototype.createNamesElement = function (dinosaur) {
  // function to create div and populate that with the name data extracted from the data.
  const option = document.createElement('option');
  option.textContent = dinosaur.name;
  return option

};






module.exports = GridView;
