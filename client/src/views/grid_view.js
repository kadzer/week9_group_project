const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');

const GridView = function (container) {
  this.container = container;
};

GridView.prototype.bindEvents = function () {
  PubSub.subscribe('Dinosaurs:data-loaded', (event) => {
    this.render(event.detail);
    this.createListElement(event.detail);
    const nameElement = document.querySelector('#dino_names');
    nameElement.addEventListener('click', (event) => {
      const selectedName = event.target.innerText;
      PubSub.publish('GridView:Change', selectedName);
      // console.log(event.target.innerText);
    });

  });
};

GridView.prototype.render = function (dinosaurs) {
  this.container.innerHTML = '';
  const dinoGrid = document.createElement('div');
  dinoGrid.id = 'dino_grid';
  this.container.appendChild(dinoGrid);
  const itemView = new ItemView(dinoGrid);
  dinosaurs.forEach((dinosaur) =>  {
    itemView.render(dinosaur)
  });
  dinoGrid.addEventListener('click', (event) => {
    const selectedDinosaur = event.target.innerText;
    console.log(event.target.innerText);
  })
};

GridView.prototype.createListElement = function (dinosaurs) {
  const namesList = document.createElement('div');
  namesList.id = 'dino_names';
  this.container.appendChild(namesList);
  dinosaurs.forEach((dinosaur, index) => {
    const option = this.createNamesElement(dinosaur, index);
    namesList.appendChild(option);
  })
}

// GridView.prototype.renderNames = function (dinosaurs) {
//
// };

GridView.prototype.createNamesElement = function (dinosaur, index) {
  // function to create div and populate that with the name data extracted from the data.
  const option = document.createElement('option');
  option.textContent = dinosaur.name;
  option.value = index;
  // console.log(index);
  return option;
  // const element = document.selectElement('option');


};


module.exports = GridView;
