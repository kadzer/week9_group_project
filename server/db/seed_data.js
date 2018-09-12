use dinosaurs;
db.dropDatabase();

db.dinoCollection.insertMany([
  {
    "id": 1,
    "name": "Allosaurus",
    "pronunciation": "AL-oh-sore-us",
    "meaningOfName": "Other lizard",
    "diet": "Carnivorous",
    "length": "12m",
    "period": "Late Jurassic",
    "mya": "156-144",
    "firstAppeared": 156,
    "info": "Allosaurus was an apex predator in the Late Jurassic in North America.",
    "picture": "images/Allosaurus.png",
    "latlng": [
      40.11169,
      -105.93587
    ],
    "audio": "audio/roar.mp3"
  },
  {
    "id": 2,
    "name": "Apatosaurus",
    "pronunciation": "ah-PAT-oh-sore-us",
    "meaningOfName": "Deceptive lizard",
    "diet": "Herbivorous",
    "length": "21m",
    "period": "Late Jurassic",
    "mya": "154-145",
    "firstAppeared": 154,
    "info": "Named the 'deceptive lizard' because its skull was confused with those of other sauropods until 1909.",
    "picture": "images/Apatosaurus.png",
    "latlng": [
      38.67,
      -107.01
    ],
    "audio": "audio/roar.mp3"
  },
  {
    "id": 3,
    "name": "Brachiosaurus",
    "pronunciation": "BRAK-ee-oh-sore-us",
    "meaningOfName": "Arm lizard",
    "diet": "Herbivorous",
    "length": "30m",
    "period": "Late Jurassic",
    "mya": "155-140",
    "firstAppeared": 155,
    "info": "Brachiosaurus was a large, North American sauropod dinosaur with an arch encircling its nasal opening.",
    "picture": "images/Brachiosaurus.png",
    "latlng": [
      39.15,
      -108.716667
    ],
    "audio": "audio/roar.mp3"
  },
  {
    "id": 4,
    "name": "Dracorex",
    "pronunciation": "dray-ko-rex",
    "meaningOfName": "Dragon king",
    "diet": "Herbivorous",
    "length": "estimated 4m",
    "period": "Late Cretaceous",
    "mya": "66",
    "firstAppeared": 66,
    "info": "Dracorex hogwartsia was a pachycephalosaur that did not have a domed head. Instead, its skull was adorned with spikes and frills reminiscent of a dragon. A skull was discovered in the Hell Creek Formation in South Dakota and donated to the Children's Museum of Indianapolis in 2004. Its name was inspired by J.K. Rowling's Harry Potter series and the young visitors to the children's museum.",
    "picture": "images/Dracorex.png",
    "latlng": [
      46.9,
      -101.5
    ],
    "audio": "audio/roar.mp3"
  },
  {
    "id": 5,
    "name": "Parasaurolophus",
    "pronunciation": "PARR-eh-saw-ROL-off-us / PARR-eh-sawr-eh-LOH-fus",
    "meaningOfName": "Near crested lizard",
    "diet": "Herbivorous",
    "length": "11m",
    "period": "Late Cretaceous",
    "mya": "76-74",
    "firstAppeared": 76,
    "info": "Found in Canada and the USA, Parasaurolophus was a hadrosaur most famous for its long, elaborate cranial crest.",
    "picture": "images/Parasaurolophus.png",
    "latlng": [
      50.963242,
      -109.9993925
    ],
    "audio": "audio/roar.mp3"
  },
  {
    "id": 6,
    "name": "Spinosaurus",
    "pronunciation": "SPINE-oh-SORE-us",
    "meaningOfName": "Spine lizard",
    "diet": "Carnivorous",
    "length": "18m",
    "period": "Early Cretaceous",
    "mya": "112-97",
    "firstAppeared": 112,
    "info": "Spinosaurus was one of the largest carnivorous dinosaurs to walk the Earth. Its diet consisted mostly of fish and the large spines on its back likely formed a sail.",
    "picture": "images/Spinosaurus.png",
    "latlng": [
      28.405556,
      28.805556
    ],
    "audio": "audio/roar.mp3"
  },
  {
    "id": 7,
    "name": "Stegosaurus",
    "pronunciation": "STEG-o-SAWR-us",
    "meaningOfName": "'Roof lizard' or 'plated lizard'",
    "diet": "Herbivorous",
    "length": "9m",
    "period": "Late Jurassic",
    "mya": "156-140",
    "firstAppeared": 156,
    "info": "Stegosaurus had 17 bony plates that were embedded in its back - the plates ran along the Stegosaurus' back and tail in two rows, and the plates alternated in alignment. The largest of these triangular plates was about 2.5 ft (76 cm) tall and just as long. Stegosaurus also had spikes at the end of its flexible tail (these are called thagomizers).",
    "picture": "images/Stegosaurus.png",
    "latlng": [
      38.573333,
      -105.225278
    ],
    "audio": "audio/roar.mp3"
  },
  {
    "id": 8,
    "name": "Triceratops",
    "pronunciation": "try-SER-a-tops",
    "meaningOfName": "Three-horned face",
    "diet": "Herbivorous",
    "length": "9m",
    "period": "Late Cretaceous",
    "mya": "72-65",
    "firstAppeared": 72,
    "info": "When threatened by predators, Triceratops probably charged into its enemy like the modern-day rhinoceros does. Triceratops was probably a herding animal, like the other ceratopsians. T. rex probably ate dinosaurs like Triceratops.",
    "picture": "images/Triceratops.png",
    "latlng": [
      39.76185,
      -104.881105
    ],
    "audio": "audio/roar.mp3"
  },
  {
    "id": 9,
    "name": "Tyrannosaurus",
    "pronunciation": "tie-RAN-oh-sore-us",
    "meaningOfName": "Tyrant lizard",
    "diet": "Carnivorous",
    "length": "12m",
    "period": "Late Cretaceous",
    "mya": "68-66",
    "firstAppeared": 68,
    "info": "Tyrannosaurus is well-represented in both fiction and history with over 50 specimens discovered. It and was one of the last non-avian dinosaurs to exist before the extinction event. Tyrannosaurus had a massive skull and a long heavy tail.",
    "picture": "images/Tyrannosaurus.png",
    "latlng": [
      39.746944,
      -105.210833
    ],
    "audio": "audio/roar.mp3"
  }
]);
