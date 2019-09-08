// DSA - 1 - Intro to JavaScript and DSA

// let and const

// Global Scope
var carOne = 'Ferrari';
console.log(carOne);

function logCar() {
  console.log(carOne);
}

// Function Scope
function logCarTwo() {
  var carTwo = 'BMW';
  console.log(carTwo);
}
// console.log(carTwo);
logCarTwo();
// console.log(carTwo);

// let and const

// let and const keyword helps us with the block scoping of variables

// Global Scope
let x = 1; // let keyword is helping us with global scoping
if(x==1) {
  // Block Scope
  let x = 2;
  console.log(x);
}
console.log(x);

// const keyword
const username = 'prateek951';
const password = '12345';

password = 'abc';
console.log(password);  // reassignment of constant variable is not allowed

// Strings

// Booleans


// Arrays

// Maps (in later videos)
