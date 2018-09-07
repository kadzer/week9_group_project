const ItemView = function (container) {
  this.contaienr = container;
};

ItemView.prototype.render = function (dinosaur) {
  const dinosaurContainer = document.createElement('div');
  dinosaurContainer.id = 'dinosaur';

  const name = this.createHeading(dinosaur.name);
  dinosaurContainer.appendChild(name);

  const pronunciation = this.createDetail('Pronunciation ', dinosaur.pronunciation);
  dinosaurContainer.appendChild(pronunciation);

  const meaningOfName = this.createDetail('Meaning Of Name ', dinosaur.meaningOfName);
  dinosaurContainer.appendChild(meaningOfName);

  const diet = this.createDetail('Diet ', dinosaur.diet);
  dinosaurContainer.appendChild(diet);

  const length = this.createDetail('Length ', dinosaur.length);
  dinosaurContainer.appendChild(length);

  const period = this.createTextDetail(`This Dinosaur lived during the ${dinosaur.period} period which was ${dinosaur.mya} million years ago.`);
  dinosaurContainer.appendChild(period);

  const info = this.createDetail('Fun Fact ' dinosaur.info);
  dinosaurContainer.appendChild(info);
};




module.exports = ItemView;
