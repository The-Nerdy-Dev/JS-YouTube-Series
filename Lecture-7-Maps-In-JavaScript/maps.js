// Maps in JavaScript

// How map is stored in memory

// {
//   'a' => 1,
//   'b' => 2,
//   'c' => 3
// }

const mapObject = new Map();

// Properties of the map
// 1. size
console.log(mapObject.size);

// Map methods
mapObject.set('a', 1); // {'a'=>1}
console.log(mapObject.size);
mapObject.set('b', 2); // {'a' => 1,'b' => 2}
console.log(mapObject.size);

// Set method is chainable
mapObject
  .set('c', 3)
  .set('d', 4)
  .set('e', 5);
console.log(mapObject.size);
console.log(mapObject);

// access an entry of the map
console.log(mapObject.get('d'));
console.log(mapObject.get('f'));

console.log(mapObject.has('a'));
console.log(mapObject.has('g'));

// keys method
console.log(mapObject.keys());
console.log(mapObject.values());
console.log(mapObject.entries()); // [['a',1],['b',2],...]

//forEach method
mapObject.forEach((value, key) => console.log(key, value));

//delete method
mapObject.delete('a');
mapObject.delete('b');
console.log(mapObject);
console.log(mapObject.size);

// clear() - delete all the entries in the map object
// mapObject.clear();
console.log(mapObject);
console.log(mapObject.size);s
// Weak Map
// Keys of a weak map must be an object
// Keys of a weak map are weak, means that they
// must be garbage collected
// It has only a subset of methods and its elements cannot be iterated.

// Iterable object like a map to an array
console.log(Array.from(mapObject.entries()));
console.log(Array.from(mapObject.keys()));
console.log(Array.from(mapObject.values()));

// Same thing can be done using spread operator
console.log([...mapObject.entries()]);
console.log([...mapObject.keys()]);
console.log([...mapObject.values()]);
