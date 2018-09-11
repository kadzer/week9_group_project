use dinosaurs;
db.dropDatabase();

db.dinoCollection.insertMany([
  {
    "id": 1,
    "name": "Allosaurus",
    "pronunciation": "AL-oh-sore-us",
    "meaningOfName": "other lizard",
    "diet": "carnivorous",
    "length": "12m",
    "period": "Late Jurassic",
    "mya": "156-144",
    "info": "Allosaurus was an apex predator in the Late Jurassic in North America.",
    "picture": "images/Allosaurus.png",
    "latlng": [
      38.736946,
      -9.142685
    ]
    "audio": "audio/roar.mp3"
  },
  {
    "id": 2,
    "name": "Apatosaurus",
    "pronunciation": "ah-PAT-oh-sore-us",
    "meaningOfName": "deceptive lizard",
    "diet": "herbivorous",
    "length": "21m",
    "period": "Late Jurassic",
    "mya": "154-145",
    "info": "Named the 'deceptive lizard' because its skull was confused with those of other sauropods until 1909.",
    "picture": "images/Apatosaurus.png",
    "latlng": [
      38.736946,
      -9.142685
    ]
    "audio": "audio/roar.mp3"
  },
  {
    "id": 3,
    "name": "Brachiosaurus",
    "pronunciation": "BRAK-ee-oh-sore-us",
    "meaningOfName": "arm lizard",
    "diet": "herbivorous",
    "length": "30m",
    "period": "Late Jurassic",
    "mya": "155-140",
    "info": "Brachiosaurus was a large, North American sauropod dinosaur with an arch encircling its nasal opening.",
    "picture": "images/Brachiosaurus.png",
    "latlng": [
      38.736946,
      -9.142685
    ]
    "audio": "audio/roar.mp3"
  },
  {
    "id": 4,
    "name": "Dracorex",
    "pronunciation": "dray-ko-rex",
    "meaningOfName": "dragon king",
    "diet": "herbivorous",
    "length": "estimated 4m",
    "period": "Late Cretaceous",
    "mya": "66",
    "info": "Dracorex hogwartsia was a pachycephalosaur that did not have a domed head. Instead, its skull was adorned with spikes and frills reminiscent of a dragon. A skull was discovered in the Hell Creek Formation in South Dakota and donated to the Children's Museum of Indianapolis in 2004. Its name was inspired by J.K. Rowling's Harry Potter series and the young visitors to the children's museum.",
    "picture": "images/Dracorex.png",
    "latlng": [
      38.736946,
      -9.142685
    ]
    "audio": "audio/roar.mp3"
  },
  {
    "id": 5,
    "name": "Parasaurolophus",
    "pronunciation": "PARR-eh-saw-ROL-off-us / PARR-eh-sawr-eh-LOH-fus",
    "meaningOfName": "near crested lizard",
    "diet": "herbivorous",
    "length": "11m",
    "period": "Late Cretaceous",
    "mya": "76-74",
    "info": "Found in Canada and the USA, Parasaurolophus was a hadrosaur most famous for its long, elaborate cranial crest.",
    "picture": "images/Parasaurolophus.png",
    "latlng": [
      38.736946,
      -9.142685
    ]
    "audio": "audio/roar.mp3"
  },
  {
    "id": 6,
    "name": "Spinosaurus",
    "pronunciation": "SPINE-oh-SORE-us",
    "meaningOfName": "spine lizard",
    "diet": "carnivorous",
    "length": "18m",
    "period": "Early Cretaceous",
    "mya": "112-97",
    "info": "Spinosaurus was one of the largest carnivorous dinosaurs to walk the Earth. Its diet consisted mostly of fish and the large spines on its back likely formed a sail.",
    "picture": "images/Spinosaurus.png",
    "latlng": [
      38.736946,
      -9.142685
    ]
    "audio": "audio/roar.mp3"
  },
  {
    "id": 7,
    "name": "Stegosaurus",
    "pronunciation": "STEG-o-SAWR-us",
    "meaningOfName": "'roof lizard' or 'plated lizard'",
    "diet": "Herbivore",
    "length": "9m",
    "period": "Late Jurassic",
    "mya": "156-140",
    "info": "Stegosaurus had 17 bony plates that were embedded in its back - the plates ran along the Stegosaurus' back and tail in two rows, and the plates alternated in alignment. The largest of these triangular plates was about 2.5 ft (76 cm) tall and just as long. Stegosaurus also had spikes at the end of its flexible tail (these are called thagomizers).",
    "picture": "images/Stegosaurus.png",
    "latlng": [
      38.736946,
      -9.142685
    ]
    "audio": "audio/roar.mp3"
  },
  {
    "id": 8,
    "name": "Triceratops",
    "pronunciation": "try-SER-a-tops",
    "meaningOfName": "three-horned face",
    "diet": "Herbivore",
    "length": "9m",
    "period": "Late Cretaceous",
    "mya": "72-65",
    "info": "When threatened by predators, Triceratops probably charged into its enemy like the modern-day rhinoceros does. Triceratops was probably a herding animal, like the other ceratopsians. T. rex probably ate dinosaurs like Triceratops.",
    "picture": "images/Triceratops.png",
    "latlng": [
      38.736946,
      -9.142685
    ]
    "audio": "audio/roar.mp3"
  },
  {
    "id": 9,
    "name": "Tyrannosaurus",
    "pronunciation": "tie-RAN-oh-sore-us",
    "meaningOfName": "tyrant lizard",
    "diet": "carnivorous",
    "length": "12m",
    "period": "Late Cretaceous",
    "mya": "68-66",
    "info": "Tyrannosaurus is well-represented in both fiction and history with over 50 specimens discovered. It and was one of the last non-avian dinosaurs to exist before the extinction event. Tyrannosaurus had a massive skull and a long heavy tail.",
    "picture": "images/Tyrannosaurus.png",
    "latlng": [
      38.736946,
      -9.142685
    ]
    "audio": "audio/roar.mp3"
  }
]);
