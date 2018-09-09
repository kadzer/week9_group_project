const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Dinosaurs = function (url) {
  this.url = 'http://localhost:3000/api/dino';
  this.request = new Request(this.url);
};

Dinosaurs.prototype.bindEvents = function () {
PubSub.subscribe('GridView:Change', (event) => {
  const dinoName = event.detail;
  // console.log(event.detail);
  this.findByName(dinoName);
  // this.sendDino(dinoName);
  // this.spitOutDinos();
})
};

// sendDino needs to subsribe to all the data and then find the one dino object and then publish this.
// Dinosaurs.prototype.sendDino = function (index) {
//   PubSub.subscribe('Dinosaurs:data-loaded', (event) => {
//     const dinosaurs = event.detail;
//     console.log(event.detail);
//   })
// };

Dinosaurs.prototype.findByName = function (dinoName) {
  const allDinos = this.spitOutDinos();
  console.log();
  const foundDino = this.allDinos.find((dino) => {
    return dino.name === dinoName;
  });
  return dinoName;
};

Dinosaurs.prototype.spitOutDinos = function () {
  PubSub.subscribe('Dinosaurs:data-loaded', (event) => {
    console.log(event.detail);
    return event.detail;

  })
};


// getData publishes seeded data
Dinosaurs.prototype.getData = function () {
  this.request.get()
  .then((dinosaurs) => {
    PubSub.publish('Dinosaurs:data-loaded', dinosaurs);
    return dinosaurs;
  })
  .catch(console.error);
};

// Dinosaurs.prototype.publishDinoNames = function (data) {
//
// };
//










module.exports = Dinosaurs;
