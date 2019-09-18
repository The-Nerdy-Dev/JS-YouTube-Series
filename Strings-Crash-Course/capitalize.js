// Capitalize the given string

// prateek is awesome -> Prateek is awesome

const createErrorMessage = (errorMessage, hasTypeErrored = false) => {
  if (hasTypeErrored) {
    const error = new TypeError(errorMessage);
    throw error;
  }
  throw new Error(errorMessage);
};

function capitalize(string) {
  if (typeof string !== 'string') {
    return createErrorMessage(`Expected string, got ${typeof string}`, true);
  }
  return string.charAt(0).toUpperCase().concat(string.slice(1).toLowerCase());
}

console.log(capitalize('prateek is awesome'));
