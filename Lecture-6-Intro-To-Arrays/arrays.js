// Introduction to arrays
// An array is a collection of elements and each element of array can be of different type

const array = [1, null, undefined, { a: 1 }, true];
// Arrays are reference types

// Suppose the array that got allocated to the heap has a base address of 0x1000
// and each array element occupies 4 bytes of memory in your machine (assumption)

/// Accessing an element using the index

console.log(array[0]); // first element
console.log(array[array.length - 1]); // last element

console.log(array.prototype);

for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

const numbers = [1, 2, 3, 4, 5];

// Methods
// forEach method
// Iterates over the array of elements
numbers.forEach((number, index) => console.log(number));

// map method
// Iterates over the array of elements but it returns us the transformed array when you applying some transformation

const transformedNumbers = numbers.map(number => number + 1);
console.log(transformedNumbers);

