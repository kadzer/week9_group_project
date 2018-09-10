const Dinosaurs = require('./models/dinosaurs.js');
const GridView = require('./views/grid_view.js');
const ItemView = require('./views/item_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const dinosaurs = new Dinosaurs();
  //calling getData before bindEvents to make sure dinos are stored
  dinosaurs.getData();
  dinosaurs.bindEvents();

  const dinoContainer = document.querySelector('div#dinosaurs');
  const dinoGridView = new GridView(dinoContainer);
  dinoGridView.bindEvents();

  // dinosaurs.getData();
  // const itemGrid = new ItemView;
  // itemGrid.bindEvents();


});
