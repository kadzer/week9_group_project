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
    var ul = document.createElement('ul');
    ul.innerHTML = 'Dinosaurs'
    document.getElementById("nav-bar").appendChild(ul);
    dinosaurs.forEach(function(dinosaur){
      var li = document.createElement('li');
      ul.appendChild(li);
			li.innerHTML += dinosaur.name;
    });
  };


module.exports = NaviView;
