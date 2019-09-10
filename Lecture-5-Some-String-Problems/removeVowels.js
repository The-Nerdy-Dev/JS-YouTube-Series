// remove Vowels in a string

// "united states of america" => "ntd stts f mrc"

const createErrorMessage = (errorMessage, hasTypeErrored = false) => {
  if (hasTypeErrored) {
    const error = new TypeError(errorMessage);
    throw error;
  }
  throw new Error(errorMessage);
};

const isConsonant = character => {
  // U -> u
  const characterToCheck = character.toLowerCase();
  return (
    characterToCheck !== 'a' &&
    characterToCheck !== 'e' &&
    characterToCheck !== 'i' &&
    characterToCheck !== 'o' &&
    characterToCheck !== 'u'
  );
};

function removeVowels(stringOne) {
  // Check whether the argument that is passed to the function is a string or not
  if (typeof stringOne !== 'string') {
    return createErrorMessage(`Expected string got ${typeof stringOne}`, true);
  }
  const consonants = Array.from(stringOne).filter(character =>
    isConsonant(character)
  );
  // return the string representation
  return consonants.join('');
}

console.log(removeVowels('united states of america'));

