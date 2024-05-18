// დავალება 1

const person = {
  name: "John",
  greet() {
    return `Hello my name is ${this.name}`;
  },
};

console.log(person.greet());

// დავალება 2

function printDeatils(name) {
  console.log(name);
}

printDeatils(person);

// დავალება 3

const person1 = {
  name: "Mike",
  ownsProperty(car, laptop) {
    console.log(`${this.name} owns ${car} and ${laptop}`);
  },
};

const person2 = {
  name: "Dylan",
};

person1.ownsProperty.call(person2, "Toyota", "Legion");

// დავალება 4

person1.ownsProperty.apply(person2, ["Nissan", "Lenovo"]);

// დავალება 5

const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: 4.25,
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: 4.15,
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: 3.51,
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
  },
];

const text = document.querySelector(".h1");

let sum = 0;
for (let element of allSongs) {
  sum += element.duration;
}
text.textContent = sum;
