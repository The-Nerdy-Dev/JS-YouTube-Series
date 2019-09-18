// Count the substrings with equal ends
const createErrorMessage = (errorMessage, hasTypeErrored = false) => {
  if (hasTypeErrored) {
    const error = new TypeError(errorMessage);
    throw error;
  }
  throw new Error(errorMessage);
};

const NUMBER_OF_CHARACTERS_IN_ENGLISH_ALPHABET = 26;

function createArrayWithZeros() {
  const arrayOfZeros = [];
  for (
    let index = 0;
    index < NUMBER_OF_CHARACTERS_IN_ENGLISH_ALPHABET;
    index++
  ) {
    arrayOfZeros.push(0);
  }
  return arrayOfZeros;
}

function countSubstringsWithEqualEnds(stringOne) {
  if (typeof stringOne !== 'string') {
    return createErrorMessage(`Expected string, got ${typeof string}`, true);
  }
  // Using the hashed array approach (HA approach - HAA)
  const hashedArray = createArrayWithZeros();
  // prateek as an example
  // Iterate over the string and count the occurrence of each of the character that is there in the string
  for (let index = 0; index < stringOne.length; index++) {
    const markIndex = stringOne.charCodeAt(index) - 97;
    hashedArray[markIndex]++;
  }
  // prateek
  // Count of substrings with equal ends
  let countOfSubstringsWithEqualEnds = 0;
  for (let index = 0; index < hashedArray.length; index++) {
    countOfSubstringsWithEqualEnds +=
      (hashedArray[index] * (hashedArray[index] + 1)) / 2;
  }
  return countOfSubstringsWithEqualEnds;
}

console.log(countSubstringsWithEqualEnds('prateek'));
