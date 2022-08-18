/*Final Source Code*/

/* Review of Already Learned ES6 Stuff */

//Variables

//Constant variable that cannot be reassigned/changed
const PI = 3.14159;

// Variable declaration using let
let studentCount = 0;

// Variable being changed/reassigned
studentCount = 40;

/*
let & const variables can be scoped to a block of code
this means that they can be used only within the block of code
and not outside of it

this is useful for keeping variables private to only where they are needed/used
such as a function or an if statement
*/

//Class Declarations/Syntax

class Student {
  constructor(name, age, cohort, hasGlasses) {
    this.name = name;
    this.age = age;
    this.cohort = cohort;
    this.hasGlasses = hasGlasses;
  }

  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  setCohort(cohort) {
    this.cohort = cohort;
  }

  getAge() {
    return this.age;
  }
}

// Creating a new student (instance) object
const student1 = new Student("Uday Manneru", 16, "Medidata-JS", true);

// Calling the greeting method on the student object
console.log(student1.greeting()); // "Hello, my name is Uday Manneru and I am 16 years old."

// Calling the setCohort method on the student object
student1.setCohort("Medidata-JS");
console.log(student1.cohort); // "Medidata-JS"

// Printing Student Object Properties with dot notation
console.log(student1.name); // "Uday Manneru"
console.log(student1.age); // 16
console.log(student1.hasGlasses); // true

/* New ES6 Concepts */

/* Arrow Functions */

// Arrow Function Syntax
const introduce = (name, age, location) => {
  // Template Literal
  return `Hi, my name is ${name}. I'm ${age} years old and I'm from ${location}.`;
};

const abdel = introduce("Abdelmonem Khedr", 22, "Egypt"); // Hi, my name is Abdelmonem Khedr, I'm 22 years old and I'm from Egypt

//Arrow Function Shorthand
let exponent = (num, exp) => num ** exp;
const fourSquared = exponent(4, 2); // 16

/* Objects & Property Access with Destructuring */

// Object describing our teaching fellow Kenneth
let kenneth = {
  name: {
    first: "Kenneth",
    last: "Gonzalez",
  },
  age: 17,
  personLocation: "New York",
  favoriteAnimeList: ["One Piece", "Naruto", "Demon Slayer"],
  role: "Teaching Fellow at All Star Code",

  introduce: function () {
    return "Hi, I'm " + this.name.first + " and I'm a " + this.role;
  },

  setAge(n) {
    this.age = n;
  },
};

// Object Destructuring & Property Access
const { personLocation, age, role } = kenneth;
console.log(personLocation, age, role); // New York 17 Teaching Fellow at All Star Code

// Array Destructuring & Element Access
const coordinates = [75, -40, 33];
const [latitude, longitude, altitude] = coordinates;
console.log(latitude, longitude, altitude); // 75 -40 33

/* Rest/Spread Operator with Objects */
const abdelObject = {
  name: "Abdelmonem",
  age: 22,
};

// "...abdel" "unpacks" the abdel's object properties into the new object
const abdelObjectUpdated = {
  ...abdel,
  role: "Lead Instructor",
  nationality: "Egyptian",
  hasGlasses: true,
};

//Combining Arrays with the Spread Operator
const numsArrayOne = [1, 2, 3, 4, 5];
const numsArrayTwo = [6, 7, 8, 9];

const combinedArray = [...numsArrayOne, ...numsArrayTwo];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* Arrays */

// Numbers Array
const numbers = [3, 4, 5, 6, 7, 8, 9];

// New Array that has the even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [ 4, 6, 8 ]

// New Array that has the numbers squared
const squaredNumbers = numbers.map((num) => num ** 2);
console.log(squaredNumbers); // [ 9, 16, 25, 36, 49, 64, 81 ]

// .map(), & .filter() chaining, for getting the even squared numbers
let squaredEvenNumbers = numbers
  .map((num) => num ** 2)
  .filter((num) => num % 2 === 0);

console.log(squaredEvenNumbers); // [16, 36, 64]

// Printing info of squared numbers
squaredEvenNumbers.forEach((number, index) => {
  let elementInfo = `The number at index ${index} is ${number}`;
  console.log(elementInfo);
});

/* Fetch with async/await */

// Fetch with async/await arrow function
const getStudents = async () => {
  const proxy = "https://nextjs-cors-anywhere.vercel.app/api?endpoint=";
  const api = "https://mlb-md-firebase-demo.vercel.app/api/students";

  const response = await fetch(proxy + api); // "await" waits for the fetch response to come back
  const data = await response.json(); // "await" waits for the response data to be parsed as JSON

  console.log(data);

  // Loop through the data and print each student object
  data.forEach((student) => {
    console.log(student);
  });
};

getStudents();
