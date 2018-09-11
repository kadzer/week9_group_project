const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Dinosaurs = function (url) {
  this.url = 'http://localhost:3000/api/dino';
  this.request = new Request(this.url);
  this.allDinos = [];
};

Dinosaurs.prototype.bindEvents = function () {
  PubSub.subscribe('GridView:Change', (event) => {
    const dinoName = event.detail;
    this.findByName(dinoName);
  })
};

Dinosaurs.prototype.getData = function () {
  this.request.get()
  .then((dinosaurs) => {
    this.allDinos = dinosaurs;
    PubSub.publish('Dinosaurs:data-loaded', dinosaurs);
  })
  .catch(console.error);
};

Dinosaurs.prototype.findByName = function (dinoName) {
  const allDinos = this.allDinos;
  const result = allDinos.find((dino) => {
    return dino.name === dinoName
  });
  PubSub.publish('Dinosaurs:found-dino', result);
};

module.exports = Dinosaurs;
