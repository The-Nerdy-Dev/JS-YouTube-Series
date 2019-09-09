// Strings in JavaScript

// Strings are sequence of characters

const stringOne = 'Prateek';

// properties
console.log(stringOne.length); // length of the string
console.log(stringOne.prototype); // undefined

// methods

// indexOf() method
// returns us the index of the very first occurrence of a character in a string

console.log(stringOne.indexOf('r'));

// lastIndexOf() method
// returns us the index of the last occurrence of a character in a string
console.log(stringOne.lastIndexOf('e'));

// slice() method  extracts a part of a string and returns us the extracted part of the string
// To be precise, it returns us a shallow clone of the string
console.log(stringOne.slice());

console.log(stringOne.slice(2,4));

// substring() method
const substringStringOne = stringOne.substring(0,2);
console.log(substringStringOne);

// includes() method ()
// check whether a certain character is present in the string or not

const character = 'z';
console.log(stringOne.includes(character));

// Concatenation method

console.log(stringOne.concat(character));

// trim() removes whitespace from both ends of the string

const stringWithWhitespaces = '      I am sick   ';
const stringWithoutWhitespaces = stringWithWhitespaces.trim();
console.log(stringWithoutWhitespaces);

// Extracting the string characters
// charAt
// returns us the character at a specific index in a string
console.log(stringOne.charAt(0));

//charCodeAt()
// returns the unicode of the character at a specific index in a string
console.log(stringOne.charCodeAt(0));// A -> 65 P -> 65+15

// fromCharCode
// return us the character from the unicode of it
console.log(String.fromCharCode(80));



