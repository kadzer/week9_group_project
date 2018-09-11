const Dinosaurs = require('./models/dinosaurs.js');
const GridView = require('./views/grid_view.js');
const DetailView = require('./views/detail_view.js');
const NaviView = require('./views/navi_view.js');
const MapWrapper = require('./views/map_wrapper.js');
document.addEventListener('DOMContentLoaded', () => {
  const dinosaurs = new Dinosaurs();
  //calling getData before bindEvents to make sure dinos are stored
  dinosaurs.getData();
  dinosaurs.bindEvents();

  const navElement = document.querySelector('#nav-bar');
  const navBar = new NaviView(navElement);
  navBar.bindEvents();

  const dinoContainer = document.querySelector('.all_dinosaurs');
  const dinoGridView = new GridView(dinoContainer);
  dinoGridView.bindEvents();

const container = document.createElement('div');
container.id = "map";
  const mapWrapper = new MapWrapper(container)
  mapWrapper.bindEvents();
  const detailView = new DetailView(mapWrapper);
  detailView.bindEvents();

});
