// Abbreviate String

// Abbreviate a name as an example

// Peter Thomas : Peter T.
// Alex Jonas : Alex J.
// Prateek => Prateek.
const createErrorMessage = (errorMessage, hasTypeErrored = false) => {
  if (hasTypeErrored) {
    const error = new TypeError(errorMessage);
    throw error;
  }
  throw new Error(errorMessage);
};

function abbreviateString(stringOne) {
  // Check whether the argument that is passed to the function is a string or not
  if (typeof stringOne !== 'string') {
    return createErrorMessage(`Expected string, got ${typeof stringOne}`, true);
  }
  // Split the string at the space
  let nameArray = stringOne.split(' '); // ['Peter','thomas']

  if (nameArray.length >= 2) {
    return (
      nameArray[0] +
      ' ' +
      nameArray[nameArray.length - 1][0].toUpperCase() +
      '.'
    );
    // Peter T.
  } else {
    return nameArray[0] + '.'; // Prateek.
  }
}

console.log(abbreviateString('Prateek'));
console.log(abbreviateString('Peter Thomas'));
// console.log(abbreviateString({}));
// console.log(abbreviateString([]));
