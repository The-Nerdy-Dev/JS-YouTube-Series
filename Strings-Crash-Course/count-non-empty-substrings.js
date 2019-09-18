// Count the non-empty substrings in a string

// Number of non-empty substrings in a string is n*(n+1)/2 where n is the length of the string

const createErrorMessage = (errorMessage, hasTypeErrored = false) => {
  if (hasTypeErrored) {
    const error = new TypeError(errorMessage);
    throw error;
  }
  throw new Error(errorMessage);
};

function countNonEmptySubstrings(string) {
  if (typeof string !== 'string') {
    return createErrorMessage(`Expected string, got ${typeof string}`, true);
  }
  const lengthOfString = string.length;
  return (lengthOfString * (lengthOfString + 1)) / 2;
}

console.log(countNonEmptySubstrings('abcd')); // 10
// console.log(countNonEmptySubstrings());
