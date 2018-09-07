const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Dinosaurs = function (url) {
  this.url = 'http://localhost:3000/api/dinosaurs';
  this.request = new Request(this.url);
};

// Dinosaurs.prototype.bindEvents = function () {
//
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
