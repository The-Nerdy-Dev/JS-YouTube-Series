// Count the words in a string

const createErrorMessage = (errorMessage, hasTypeErrored = false) => {
  if (hasTypeErrored) {
    const error = new TypeError(errorMessage);
    throw error;
  }
  throw new Error(errorMessage);
};

function countWordsInString(stringOne) {
  if (typeof stringOne !== 'string') {
    return createErrorMessage(`Expected string, got ${typeof stringOne}`, true);
  }
  // prateek is awesome => ['prateek','is','awesome'] => 3
  const numberOfWords = stringOne.split(' ').length;
  return numberOfWords;
}

console.log(countWordsInString('prateek is awesome'));
