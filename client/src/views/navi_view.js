const PubSub = require('../helpers/pub_sub.js');

const NaviView = function (container) {
  this.container = container;
};

NaviView.prototype.bindEvents = function () {
  PubSub.subscribe('Dinosaurs:data-loaded', (event) => {
    this.createListElement(event.detail);
    const nameElement = document.querySelector('#nav-bar');
    nameElement.addEventListener('click', (event) => {
      const selectedName = event.target.innerText;
      PubSub.publish('GridView:Change', selectedName);
    });
  });
};

NaviView.prototype.createListElement = function (dinosaurs) {
  const namesList = document.querySelector('#nav-bar');
  dinosaurs.forEach((dinosaur, index) => {
    const option = this.createNamesElement(dinosaur, index);
    namesList.appendChild(option);
  })
}

NaviView.prototype.createNamesElement = function (dinosaur, index) {
  const option = document.createElement('option');
  option.textContent = dinosaur.name;
  option.value = index;
  return option;
};


module.exports = NaviView;
