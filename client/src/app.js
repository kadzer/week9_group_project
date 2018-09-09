const Dinosaurs = require('./models/dinosaurs.js');
const GridView = require('./views/grid_view.js');
const ItemView = require('./views/item_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const dinosaurs = new Dinosaurs();
  dinosaurs.bindEvents();
  dinosaurs.spitOutDinos();

  const dinoContainer = document.querySelector('div#dinosaurs');
  const dinoGridView = new GridView(dinoContainer);
  dinoGridView.bindEvents();

  dinosaurs.getData();
  // const itemGrid = new ItemView;
  // itemGrid.bindEvents();


});
