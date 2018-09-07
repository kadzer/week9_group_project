const Dinosaurs = require('./models/dinosaurs.js');
const GridView = require('./views/grid_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const dinoContainer = document.querySelector('div#dinosaurs');
  const dinoGridView = new GridView(dinoContainer);
    dinoGridView.bindEvents();

  const dinosaurs = new Dinosaurs();
  dinosaurs.getData();
});
