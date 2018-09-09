const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Dinosaurs = function (url) {
  this.url = 'http://localhost:3000/api/dino';
  this.request = new Request(this.url);
};

Dinosaurs.prototype.bindEvents = function () {
PubSub.subscribe('GridView:Change', (event) => {
  const dinoIndex = event.detail;
  this.sendDino(dinoIndex);
})
};

// sendDino needs to subsribe to all the data and then find the one dino object and then publish this.
// Dinosaurs.prototype.sendDino = function (index) {
//   PubSub.subscribe('Dinosaurs:data-loaded', (event) => {
//     const dinosaurs = event.detail;
//     console.log(event.detail);
//   })
// };

// getData publishes seeded data
Dinosaurs.prototype.getData = function () {
  this.request.get()
  .then((dinosaurs) => {
    PubSub.publish('Dinosaurs:data-loaded', dinosaurs);
  })
  .catch(console.error);
};








module.exports = Dinosaurs;
