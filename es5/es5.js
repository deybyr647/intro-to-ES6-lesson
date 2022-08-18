/* Function Declarations */

// Function Declaration
function introduce(name, age, location) {
  // String interpolation with addition operator
  let nameStr = "Hi, my name is " + name + ". ";
  let ageStr = "I'm " + age + " years old";
  let locationStr = " and I'm from " + location + ".";

  return nameStr + ageStr + locationStr;
}

// Storing the function return value in a variable
const abdel = introduce("Abdelmonem Khedr", 22, "Egypt"); // Hi, my name is Abdelmonem Khedr, I'm 22 years old and I'm from Egypt

/* Objects & Property Access */

// Object describing our teaching fellow Kenneth
let kenneth = {
  name: {
    first: "Kenneth",
    last: "Gonzalez",
  },
  age: 17,
  location: "New York",
  favoriteAnimeList: ["One Piece", "Naruto", "Demon Slayer"],
  role: "Teaching Fellow at All Star Code",

  introduce: function () {
    return "Hi, I'm " + this.name.first + " and I'm a " + this.role;
  },

  setAge(n) {
    this.age = n;
  },
};

// Object Property Access
let personName = kenneth.name.first + " " + kenneth.name.last; // Kenneth Gonzalez
let personLocation = kenneth.location; // New York
let age = kenneth.age; // 17
let animeList = kenneth.favoriteAnimeList; // ["One Piece", "Naruto", "Demon Slayer"]
console.log(personName, personLocation, age); // Kenneth Gonzalez New York 17

/* Arrays */

// Numbers Array & Sum Variable
const numbers = [3, 4, 5, 6, 7, 8, 9];

// Return new array with even numbers
function getEvenNumbers(numbersArr) {
  let evenNumbers = [];

  for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] % 2 === 0) {
      evenNumbers.push(numbersArr[i]);
    }
  }

  return evenNumbers;
}

getEvenNumbers(numbers); // [4, 6, 8]

// Return new array with squared numbers
function getSquaredNumbers(numbersArr) {
  let squaredNumbers = [];

  for (let i = 0; i < numbersArr.length; i++) {
    squaredNumbers.push(numbersArr[i] ** 2);
  }

  return squaredNumbers;
}

getSquaredNumbers(numbers); // [9, 16, 25, 36, 49, 64, 81]

/* Fetch with .then() chaining */

function getStudents() {
  const proxy = "https://nextjs-cors-anywhere.vercel.app/api?endpoint=";
  const api = "https://mlb-md-firebase-demo.vercel.app/api/students";

  fetch(proxy + api)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (let i = 0; i < data.length; i++) {
        let student = data[i];
        console.log(student);
      }
    });
}

getStudents(); // Fetches the students from the API and prints them to the console

/* Creating objects using Factory Functions & Prototypes */

/*
This was not covered in the ASC Summer Intensive
but is the basis for ES6 classes, or simply,
classes in JavaScript.


Classes & the class keyword are just syntactic sugar
over the use of factory functions and prototypes.
In other words, they make working with objects
easier.

Consider researching the following topics:
JavaScript Factory Functions
JavaScript Prototypes
JavaScript Classes vs Factory Functions
Prototypical Inheritance
*/

//Creating a Student "class" with a factory function & prototypes

function Student(name, age, cohort, hasGlasses) {
  this.name = name;
  this.age = age;
  this.cohort = cohort;
  this.hasGlasses = hasGlasses;

  this.introduce = function () {
    return (
      "Hi, my name is " +
      this.name +
      " and I'm a " +
      this.cohort +
      " cohort student."
    );
  };
}

// Creating new instance of the Student "class"
let student1 = new Student("Kenneth", 17, "MLB-HTML", false);

//Adding a method to the prototype (class)
Student.prototype.setAge = function (n) {
  this.age = n;
};

console.log(student1.introduce()); // Hi, my name is Kenneth and I'm a MLB-HTML cohort student.
student1.setAge(18); // Sets the age of the student to 18

// Print out student properties
console.log(student1.name); // Kenneth
console.log(student1.age); // 18
console.log(student1.cohort); // MLB-HTML
console.log(student1.hasGlasses); // false
