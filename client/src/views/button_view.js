const PubSub = require('../helpers/pub_sub.js');

const ButtonView = function (container) {
  this.container = container;
};

ButtonView.prototype.bindEvents = function () {
  // need to sub to all dinos, then call create button
  PubSub.subscribe('Dinosaurs:data-loaded', (event) => {
    this.createButton(event.detail);
  });
};


ButtonView.prototype.createButton = function (dinosaurs) {
  const createButton = document.createElement("button");
  createButton.id = 'timelineButton';
  createButton.innerHTML = 'See Dino Timeline'
  this.container.appendChild(createButton);
  createButton.addEventListener('click', (event) => {
    PubSub.publish('ButtonView:timelineClick', dinosaurs);
  });
};


module.exports = ButtonView;
