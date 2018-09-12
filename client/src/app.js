const Dinosaurs = require('./models/dinosaurs.js');
const GridView = require('./views/grid_view.js');
const DetailView = require('./views/detail_view.js');
const NaviView = require('./views/navi_view.js');
const MapView = require('./views/map_view.js');
// const MapWrapper = require('./views/map_wrapper.js');
const PeriodView = require('./views/period_view.js');
const TimeLine = require('./views/timeline_view.js');

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

  const mapContainer = document.querySelector('#map');
  const mapOptions = {
    zoom: 2,
    center: {lat: 30, lng: 0}
  };
  const mapView = new MapView(mapContainer, mapOptions);
  mapView.bindEvents();






  const detailView = new DetailView(mapContainer);
  detailView.bindEvents();

  const periodElement = document.querySelector('#period-select')
  const periodView = new PeriodView(periodElement);
  periodView.bindEvents();
  
  const timeline = new TimeLine(dinoContainer);
  timeline.bindEvents()

});
