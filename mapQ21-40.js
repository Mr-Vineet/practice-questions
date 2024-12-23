// capitalize first letters of ["hello world", "goodbye moon"] => ["Hello World", "Goodbye Moon"]
const uppercaseFirstLetter = function (word) {
  return word.at(0).toUpperCase().concat(word.slice(1));
};

const captalizeFirstLetter = function (string) {
  return string.split(" ").map(uppercaseFirstLetter).join(" ");
};

const capitalizedFirstLettersOf = function (strings) {
  return strings.map(captalizeFirstLetter);
};

console.log(capitalizedFirstLettersOf(["hello world", "goodbye moon"]));

// find word lengths in ["apple pie", "banana split"] => [[5, 3], [6, 5]]
const calculateWordLength = function (word) {
  return word.length;
};

const acquireLength = function (string) {
  return string.split(" ").map(calculateWordLength);
};

const wordLengthsOf = function (strings) {
  return strings.map(acquireLength);
};

console.log(wordLengthsOf(["apple pie", "banana split"]));

// flatten nested arrays of [[1, [2, 3]], [4, [5, 6]]] => [[1, 2, 3], [4, 5, 6]]
const removeNesting = function (array) {
  return array.flat();
};

const flattenedArraysOf = function (arrays) {
  return arrays.map(removeNesting);
};

console.log(flattenedArraysOf([[1, [2, 3]], [4, [5, 6]]]));

// sort letters in ["cat", "bat", "rat"] alphabetically => ["act", "abt", "art"]
const sort = function (word) {
  return [...word].sort().join("");
};

const sortedLettersOf = function (strings) {
  return strings.map(sort);
};

console.log(sortedLettersOf(["cat", "bat", "rat"]));

// wrap strings in brackets ["apple", "banana"] => ["[apple]", "[banana]"]
const wrapWords = function (word) {
  return "[" + word + "]";
};

const wrappedStringsOf = function (strings) {
  return strings.map(wrapWords);
};

console.log(wrappedStringsOf(["apple", "banana"]));

// extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]
const acquireName = function (object) {
  return object.name;
};

const extractNames = function (objects) {
  return objects.map(acquireName);
};

console.log(extractNames([{ name: "Alice" }, { name: "Bob" }]));

// extract ages from [{ age: 25 }, { age: 30 }] => [25, 30]
const acquireAge = function (object) {
  return object.age;
};

const extractAges = function (objects) {
  return objects.map(acquireAge);
};

console.log(extractAges([{ age: 25 }, { age: 30 }]));

// extract the first letters of names from [{ name: "Alice" }, { name: "Bob" }] => ["A", "B"]
const extractInitial = function (object) {
  return object.name.at(0);
};

const firstLettersOfNames = function (objects) {
  return objects.map(extractInitial);
};

console.log(firstLettersOfNames([{ name: "Alice" }, { name: "Bob" }]));

// calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }] => [6, 20]
const findArea = function (rectangle) {
  return rectangle.width * rectangle.height;
};

const calculateAreas = function (rectangles) {
  return rectangles.map(findArea);
};

console.log(calculateAreas([{ width: 2, height: 3 }, { width: 4, height: 5 }]));

// extract boolean flags from [{ active: true }, { active: false }] => [true, false]

const flag = function (object) {
  return object.active;
};

const extractFlags = function (objects) {
  return objects.map(flag);
};

console.log(extractFlags([{ active: true }, { active: false }]));

//============================= 30 Qs =======================================//
// concatenate first and last names from [{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"]
const fullNames = function (objects) { };

// calculate total prices from [{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }] => [20, 20]
// (price * quantity)
const totalPrices = function (objects) { };

// determine if a person is an adult from [{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)
const isAdult = function (objects) { };

// create abbreviations from [{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]
const abbreviations = function (objects) { };

// extract scores for math tests from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [90, 80]
const mathScores = function (objects) { };

// extract coordinates from [{ x: 1, y: 2 }, { x: 3, y: 4 }] => [[1, 2], [3, 4]]
const extractCoordinates = function (objects) { };

// extract full name and age from [{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }] => [["Alice Smith", 25], ["Bob Brown", 30]]
const fullNameAndAge = function (objects) { };

// extract scores from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [[90, 85], [80, 75]]
const extractScores = function (objects) { };

// extract key-value pairs from [{ key: "a", value: 1 }, { key: "b", value: 2 }] => [["a", 1], ["b", 2]]
const keyValuePairs = function (objects) { };

// split full names into first and last names from [{ name: "Alice Smith" }, { name: "Bob Brown" }] => [["Alice", "Smith"], ["Bob", "Brown"]]
const splitFullNames = function (objects) { };

//============================= 40 Qs =======================================//