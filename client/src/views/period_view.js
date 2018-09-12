const PubSub = require('../helpers/pub_sub.js');

const PeriodView = function (selectElement) {
  this.selectElement = selectElement;
};

PeriodView.prototype.bindEvents = function () {
  PubSub.subscribe('Dinosaurs:periods-ready', (event) => {
    const periodElement = document.querySelector('period-select');
    this.populateDropDown(event.detail);

  });
  this.selectElement.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('PeriodView:Change', selectedIndex);
  });
};

PeriodView.prototype.populateDropDown = function (periods) {
  periods.forEach((period, index) => {
    const option = this.createPeriodOption(period, index);
    this.selectElement.appendChild(option);
  })

};

PeriodView.prototype.createPeriodOption = function (period, index) {
  const option = document.createElement('option');
  option.textContent = period;
  option.value = index;
  return option;
};

module.exports = PeriodView;
