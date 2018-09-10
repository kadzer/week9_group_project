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
    // console.log(event.detail);
    this.findByName(dinoName);
  })
};

// getData publishes seeded data
Dinosaurs.prototype.getData = function () {
  this.request.get()
  .then((dinosaurs) => {
    this.allDinos = dinosaurs;
    PubSub.publish('Dinosaurs:data-loaded', dinosaurs);
    // console.log(this.allDinos);
  })
  .catch(console.error);
};

Dinosaurs.prototype.findByName = function (dinoName) {
  // console.log(dinoName);
  const allDinos = this.allDinos;
  // console.log(allDinos);


  const result = allDinos.find((dino) => {

    return dino.name === dinoName.trim()});
  PubSub.publish('Dinosaurs:found-dino', result);
  // console.log(result);
}
module.exports = Dinosaurs;
