// Reverse a string

const createErrorMessage = (errorMessage, hasTypeErrored = false) => {
  if (hasTypeErrored) {
    const error = new TypeError(errorMessage);
    throw error;
  }
  throw new Error(errorMessage);
};

function reverseString(stringOne) {
  // Check whether the argument that is provided to the function is a string or not
  if (typeof stringOne !== 'string') {
    return createErrorMessage(`Expected string, got ${typeof stringOne}`, true);
  }
  const reversedArray = [];

  // Iterate over the string in reverse manner
  for(let index=stringOne.length-1;index>=0;index--) {
    reversedArray.push(stringOne.charAt(index));
  }
  //return the string representation
  return reversedArray.join('');
}

console.log(reverseString('I am a cricketer'));
// console.log(reverseString({ a : 'I am a cricketer'}));

// Solution 2

function reverseStringTwo(stringOne) {
  // Check whether the argument that is provided to the function is a string or not
  if (typeof stringOne !== 'string') {
    return createErrorMessage(`Expected string, got ${typeof stringOne}`, true);
  }
  return stringOne.split('').reverse().join('');
}

console.log(reverseStringTwo('I am a student'));

// Solution 3

function reverseStringThree(stringOne) {
  // Check whether the argument that is provided to the function is a string or not
  if (typeof stringOne !== 'string') {
    return createErrorMessage(`Expected string, got ${typeof stringOne}`, true);
  }
  // using the spread operator
  return [...stringOne].reverse().join();
}

// Solution 4 (After array discussion we will be using the two pointer approach
// in that video)


