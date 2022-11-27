const getNewAnimal = document.getElementById('getNewAnimal');
const showAnimal = document.getElementById('showAnimal');

const animals = ['Ant', 'Badger', 'Bat', 'Bear', 'Beaver', 'Bee', 'Camel', 'Cat', 'Chicken', 'Crane', 'Cricket', 'Crocodile', 'Crow', 'Cow', 'Dog', 'Dolphin', 'Pigeon', 'Duck', 'Eagle', 'Elephant', 'Falcon', 'Fox', 'Frog', 'Giraffe', 'Goat', 'Goose', 'Rabbit', 'Hawk', 'Hedgehog', 'Heron', 'Horse', 'Hyena', 'Ibex', 'Jay', 'Leopard', 'Lion', 'Iguana', 'Lynx', 'Magpie', 'Mole', 'Mouse', 'Newt', 'Ostrich', 'Owl', 'Parrot', 'Peacock', 'Pelican', 'Quail', 'Salamander', 'Swordfish', 'Scorpion', 'Rattlesnake', 'Sparrow', 'Spider', 'Deer', 'Swan', 'Swallow', 'Tiger', 'Vulture', 'Weasel', 'Whale', 'Wolf', 'Woodpecker', 'Worm', 'Octopus', 'Gazelle', 'Eel', 'Aardvark', 'Armadillo', 'Bison', 'Rhinoceros', 'Shark', 'Trout', 'Monkey', 'Centipede', 'Squirrel', 'Hippopotamus', 'Crab', 'Dragonfly', 'Platypus', 'Echidna', 'Penguin', 'Elk', 'Moose', 'Emu', 'Flamingo', 'Penguin', 'Turtle', 'Tortoise', 'Grasshopper', 'Rat', 'Zebra', 'Wasp', 'Jaguar', 'Tapir', 'Koala', 'Kangaroo', 'Llama', 'Manatee', 'Walrus', 'Seal', 'Okapi', 'Pig', 'Racoon', 'Red panda', 'Seahorse', 'Stingray', 'Toucan', 'Ferret', 'Wombat'];

const newAnimal = () => {
  const newAnim = animals[Math.trunc(Math.random()*animals.length)];
  showAnimal.textContent = newAnim;
}
newAnimal();

getNewAnimal.addEventListener('click', newAnimal, false);

addEventListener('keypress', e => {
  if (e.key === ' ') {
    newAnimal();
  }
}, false);