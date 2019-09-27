// Segregating 0s and 1s in sorted fashion

// Input : [0,0,1,1,1,0,0]
// Output : [0,0,0,0,1,1,1]

const createErrorMessage = (errorMessage, hasTypeErrored = false) => {
  if (hasTypeErrored) {
    const error = new TypeError(errorMessage);
    throw error;
  }
  throw new Error(errorMessage);
};
const filterValues = (numbers, element) =>
  numbers.filter(number => number === element);
function segregate0sAnd1s(array) {
  // Check whether the argument that is passed to the function is an array or not
  if (!Array.isArray(array)) {
    return createErrorMessage(`Expected array, got ${typeof array}`);
  }
  // Check for the empty array condition
  if (array.length === 0) {
    return createErrorMessage(`Please try with an array of 0s and 1s`);
  }
  // Ensure only array with 0s and 1s
  if (
    array.some(
      element => typeof element !== 'number' || (element !== 0 && element !== 1)
    )
  ) {
    return createErrorMessage(
      `Expected an array of numbers, with only 0 and 1 as the elements`,
      true
    );
  }
  // Ensured that it is an array of numbers only and also that it has only 0s and 1s as the elements
  const numbers = array;
  const numbersWhichAreZero = filterValues(numbers, 0);
  const numbersWhichAreOne = filterValues(numbers, 1);
  return [...numbersWhichAreZero, ...numbersWhichAreOne];
}

console.log(segregate0sAnd1s([0, 1, 1, 0, 0, 1, 1]));
// console.log(segregate0sAnd1s([]));
// console.log(segregate0sAnd1s({}));
// console.log(segregate0sAnd1s([2,2,3,0,1]));
// console.log(segregate0sAnd1s(['0', '1', 0, 1]));
