const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');
const DetailView = require('./detail_view.js');

const GridView = function (container) {
  this.container = container;
};

GridView.prototype.bindEvents = function () {
  PubSub.subscribe('Dinosaurs:data-loaded', (event) => {
    this.renderDinoGrid(event.detail);
    // this.createListElement(event.detail);
    // const nameElement = document.querySelector('#nav-bar');
    // nameElement.addEventListener('click', (event) => {
    //   const selectedName = event.target.innerText;
    //   PubSub.publish('GridView:Change', selectedName);
    // });
    // this.handleTitleClick();
});
};

// GridView.prototype.handleTitleClick = function () {
//   const titleSelector = document.querySelector('.title');
//   titleSelector.addEventListener('click', (event) => {
//     console.log(event);
//     // this.bindEvents();
//
//
// });
// };


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

// GridView.prototype.createListElement = function (dinosaurs) {
//   const namesList = document.querySelector('#nav-bar');
//   this.container.appendChild(namesList);
//   dinosaurs.forEach((dinosaur, index) => {
//     const option = this.createNamesElement(dinosaur, index);
//     namesList.appendChild(option);
//   })
// }


// GridView.prototype.createNamesElement = function (dinosaur, index) {
//   // function to create div and populate that with the name data extracted from the data.
//   const option = document.createElement('option');
//   option.textContent = dinosaur.name;
//   option.value = index;
//   // console.log(index);
//   return option;
//   // const element = document.selectElement('option');
//
//
// };


module.exports = GridView;
