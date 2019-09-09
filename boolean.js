/// Booleans in JavaScript

const isGamer = true;

if(isGamer) {
  console.log('Yes you are a gamer');
}else {
  console.log('No try being one....It is really awesome');
}
// YES/NO ON/OFF TRUTHY/FALSY
// Boolean Function
console.log(Boolean(5 > 3));

// Comparisons ==,>,<,!=,<=,>=

console.log(Boolean(100));
console.log(Boolean("JavaScript"))
console.log(Boolean(7+3+8.5))

// Falsy things
console.log(Boolean(""));
console.log(Boolean(-0));
console.log(Boolean(0));

console.log(Boolean(undefined));
console.log(Boolean(null));

console.log(Boolean(NaN));

//Booleans are primitive values
var isFalsy = false;

var y = new Boolean(false);
console.log(y);
