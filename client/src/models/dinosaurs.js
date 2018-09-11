const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Dinosaurs = function (url) {
  this.url = 'http://localhost:3000/api/dino';
  this.request = new Request(this.url);
  this.allDinos = [];
  this.dinoPeriods = [];
};

Dinosaurs.prototype.bindEvents = function () {
  PubSub.subscribe('GridView:Change', (event) => {
    const dinoName = event.detail;
    this.findByName(dinoName);
  })
  // PubSub.subscribe('PeriodView:Change', (event) => {
  // const dinoName = event.detail;
  // this.findByName(dinoName);
// });
};

Dinosaurs.prototype.getData = function () {
  this.request.get()
  .then((dinosaurs) => {
    this.allDinos = dinosaurs;
    PubSub.publish('Dinosaurs:data-loaded', dinosaurs);
    this.publishPeriods(dinosaurs);
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

//functions to handle periods
Dinosaurs.prototype.publishPeriods = function (data) {
  this.dinoPeriods = this.uniquePeriodList();
  PubSub.publish('Dinosaurs:periods-ready', this.dinoPeriods);
}

Dinosaurs.prototype.periodList = function () {
  const fullList = this.allDinos.map(dino => dino.period);
  return fullList;
}

Dinosaurs.prototype.uniquePeriodList = function () {
  return this.periodList().filter((dino, index, array) => {
    return array.indexOf(dino) === index;
  });
}

Dinosaurs.prototype.dinosByPeriod = function (regionIndex) {
  const selectedRegion = this.regions[regionIndex];
  return this.munrosData.filter((munro) => {
    return munro.region === selectedRegion;
  });
};
//
// Dinosaurs.prototype.publishMunrosByRegion = function (regionIndex) {
//   const foundMunros = this.countriesByRegion(regionIndex);
//   PubSub.publish('Munros:munros-ready', foundMunros);
// };

module.exports = Dinosaurs;
