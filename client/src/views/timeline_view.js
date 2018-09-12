const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');
const DetailView = require('./detail_view.js');

const Timeline = function (container) {
  this.container = container;
};

Timeline.prototype.bindEvents = function () {
  PubSub.subscribe('ButtonView:timelineClick', (event) => {
    this.render(event.detail);
    PubSub.subscribe('Dinosaurs:data-loaded', (event) => {
      this.render(event.detail);
    });
  })

  // GridView.prototype.bindEvents = function () {
  //   PubSub.subscribe('Dinosaurs:data-loaded', (event) => {
  //     this.renderDinoGrid(event.detail);
  //   });
  // };



  Timeline.prototype.render = function (data) {

    console.log(this.container);
    this.container.innerHTML = '';

    const dinosaurContainer = document.createElement('div');
    dinosaurContainer.id = 'container';

    const leftContainer = document.createElement('div');
    leftContainer.id = 'left-container';
    dinosaurContainer.appendChild(leftContainer);

    const middleContainer = document.createElement('div');
    middleContainer.id = 'middle-container';
    dinosaurContainer.appendChild(middleContainer);

    const rightContainer = document.createElement('div');
    rightContainer.id = 'right-container';
    dinosaurContainer.appendChild(rightContainer);

    rightContainer.innerHTML = "Click a dinosaur image to get more information "

    // needed to sort dinos by million years ago
    data.sort(function(a, b) {
      return b.firstAppeared - a.firstAppeared;
    });

    var eras = []


    data.forEach((dinosaur) => {

      // didnt want repeat eras
      if (!eras.includes(dinosaur.period)) {
        const era = this.createEra(dinosaur.period)
        leftContainer.appendChild(era)
        eras.push(dinosaur.period)
        era.id = `era-${dinosaur.period}`;
        era.id = era.id.replace(/\s/g, '');
      }

      const name = this.createHeading(dinosaur.name);
      leftContainer.appendChild(name);


      const picture = this.createPicture(dinosaur.picture);
      leftContainer.appendChild(picture);

      const firstAppeared = this.firstAppeared(dinosaur.firstAppeared);      leftContainer.appendChild(firstAppeared);


      picture.addEventListener('click', (event) => {

        rightContainer.innerHTML = ''

        const name = this.createHeading(dinosaur.name);
        rightContainer.appendChild(name)



        const pronunciation = this.createDetail('Pronunciation:  ', dinosaur.pronunciation);
        rightContainer.appendChild(pronunciation);
        pronunciation.id = 'timelineP';



        const meaningOfName = this.createDetail('Meaning Of Name:  ', dinosaur.meaningOfName);
        rightContainer.appendChild(meaningOfName);
        meaningOfName.id = 'timelineP';


        const diet = this.createDetail('Diet:  ', dinosaur.diet);
        rightContainer.appendChild(diet);
        diet.id = 'timelineP';


        const length = this.createDetail('Length:  ', dinosaur.length);
        rightContainer.appendChild(length);
        length.id = 'timelineP';


        const period = this.createTextDetail(`This Dinosaur lived during the ${dinosaur.period} period which was ${dinosaur.mya} million years ago.`);
        rightContainer.appendChild(period);
        period.id = 'timelineP';

      })


    });

    this.container.appendChild(dinosaurContainer);

  }




  Timeline.prototype.createHeading = function (textContent) {
    const heading = document.createElement('h3');
    heading.id = 'timelineHeading';


    heading.textContent = textContent;
    return heading;
  };

  Timeline.prototype.firstAppeared = function (firstAppeared) {
    const containerFirstAppeared = document.createElement('p');
    containerFirstAppeared.textContent = `First appeared ${firstAppeared} million years ago`
    containerFirstAppeared.id = 'firstAppeared';

    return containerFirstAppeared

  };

  Timeline.prototype.createDetail = function (label, text) {
    const detail = document.createElement('p');
    detail.textContent = `${label} ${text}`;
    return detail;
  };

  Timeline.prototype.createTextDetail = function (textContent) {
    const textDetail = document.createElement('p');
    textDetail.textContent = textContent;
    return textDetail;
  };

  Timeline.prototype.createPicture = function (image) {
    const picture = document.createElement('img');
    picture.src = image;
    picture.classList.add("dino_image");
    return picture;
  };

  Timeline.prototype.createEra = function (period) {
    const era = document.createElement('h4');
    era.src = period;
    era.textContent = period;
    return era;
  };


}

module.exports = Timeline;
