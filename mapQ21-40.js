const stringMap = function (string, mapper) {
  return string.split("").map(mapper).join("");
};

// -------------------------------------------------------------------------

// capitalize first letters of ["hello world", "goodbye moon"] => ["Hello World", "Goodbye Moon"]
const uppercaseFirstLetter = function ([...word]) {
  const [firstChar, ...otherChars] = word;

  return firstChar.toUpperCase() + otherChars.join("");
};

const captalizeFirstLetter = function (string) {
  return string.split(" ").map(uppercaseFirstLetter).join(" ");
};

const capitalizedFirstLettersOf = function (strings) {
  return strings.map(captalizeFirstLetter);
};

console.log(
  "capitalize first char",
  capitalizedFirstLettersOf(["hello world", "goodbye moon"])
);

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

// console.log(wordLengthsOf(["apple pie", "banana split"]));

// flatten nested arrays of [[1, [2, 3]], [4, [5, 6]]] => [[1, 2, 3], [4, 5, 6]]
const removeNesting = function (array) {
  return array.flat();
};

const flattenedArraysOf = function (arrays) {
  return arrays.map(removeNesting);
};

// console.log(
//   flattenedArraysOf([
//     [1, [2, 3]],
//     [4, [5, 6]],
//   ])
// );

// sort letters in ["cat", "bat", "rat"] alphabetically => ["act", "abt", "art"]
const sort = function (word) {
  return [...word].sort().join("");
};

const sortedLettersOf = function (strings) {
  return strings.map(sort);
};

// console.log(sortedLettersOf(["cat", "bat", "rat"]));

// wrap strings in brackets ["apple", "banana"] => ["[apple]", "[banana]"]
const wrapWords = function (word) {
  return "[" + word + "]";
};

const wrappedStringsOf = function (strings) {
  return strings.map(wrapWords);
};

// console.log(wrappedStringsOf(["apple", "banana"]));

// extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]
const extractNames = function (objects) {
  return objects.map((object) => object.name);
};

// console.log(extractNames([{ name: "Alice" }, { name: "Bob" }]));

// extract ages from [{ age: 25 }, { age: 30 }] => [25, 30]
const extractAges = function (objects) {
  return objects.map((object) => object.age);
};

// console.log(extractAges([{ age: 25 }, { age: 30 }]));

// extract the first letters of names from [{ name: "Alice" }, { name: "Bob" }] => ["A", "B"]
const firstLettersOfNames = function (objects) {
  return objects.map((object) => object.name.at(0));
};

// console.log(firstLettersOfNames([{ name: "Alice" }, { name: "Bob" }]));

// calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }] => [6, 20]
const findArea = function (rectangle) {
  return rectangle.width * rectangle.height;
};

const calculateAreas = function (rectangles) {
  return rectangles.map(findArea);
};

// console.log(
//   calculateAreas([
//     { width: 2, height: 3 },
//     { width: 4, height: 5 },
//   ])
// );

// extract boolean flags from [{ active: true }, { active: false }] => [true, false]

const extractFlags = function (objects) {
  return objects.map((object) => object.active);
};

// console.log(extractFlags([{ active: true }, { active: false }]));

//============================= 30 Qs =======================================//
const display = console.log;
// concatenate first and last names from [{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"]
const fullNames = function (objects) {
  return objects.map((object) => object.firstName + " " + object.lastName);
};

display(
  fullNames([
    { firstName: "Alice", lastName: "Smith" },
    { firstName: "Bob", lastName: "Brown" },
  ])
);
// calculate total prices from [{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }] => [20, 20]
// (price * quantity)
const totalPrices = function (objects) {
  return objects.map((item) => item.price * item.quantity);
};

display(
  totalPrices([
    { price: 10, quantity: 2 },
    { price: 5, quantity: 4 },
  ])
);

// determine if a person is an adult from [{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)
const isAdult = function (objects) {
  return objects.map((person) => person.age >= 18);
};

display(
  isAdult([
    { name: "Alice", age: 17 },
    { name: "Bob", age: 22 },
  ])
);
// create abbreviations from [{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]
const createAcronym = function ({ city, country }) {
  const acronymOfCity = city
    .split(" ")
    .map((word) => word.at(0))
    .join("");

  return acronymOfCity + ", " + country;
};

const abbreviations = function (objects) {
  return objects.map(createAcronym);
};

display(
  abbreviations([
    { city: "New York", country: "USA" },
    { city: "Los Angeles", country: "USA" },
  ])
);

// extract scores for math tests from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [90, 80]
const mathScores = function (objects) {
  return objects.map(({ scores }) => scores.math);
};

display(
  mathScores([
    { name: "Alice", scores: { math: 90, english: 85 } },
    { name: "Bob", scores: { math: 80, english: 75 } },
  ])
);

// extract coordinates from [{ x: 1, y: 2 }, { x: 3, y: 4 }] => [[1, 2], [3, 4]]
const extractCoordinates = function (coordinates) {
  return coordinates.map(({ x, y }) => [x, y]);
};

display(
  extractCoordinates([
    { x: 1, y: 2 },
    { x: 3, y: 4 },
  ])
);

// extract full name and age from [{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }] => [["Alice Smith", 25], ["Bob Brown", 30]]
const fullNameAndAge = function (objects) {
  return objects.map((person) => [
    person.firstName + " " + person.lastName,
    person.age,
  ]);
};

display(
  fullNameAndAge([
    { firstName: "Alice", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Brown", age: 30 },
  ])
);
// extract scores from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [[90, 85], [80, 75]]
const extractScores = function (objects) {
  return objects.map(({ scores }) => [scores.math, scores.english]);
};

display(
  extractScores([
    { name: "Alice", scores: { math: 90, english: 85 } },
    { name: "Bob", scores: { math: 80, english: 75 } },
  ])
);
// extract key-value pairs from [{ key: "a", value: 1 }, { key: "b", value: 2 }] => [["a", 1], ["b", 2]]
const keyValuePairs = function (objects) {
  return objects.map((object) => [object.key, object.value]);
};

display(
  keyValuePairs([
    { key: "a", value: 1 },
    { key: "b", value: 2 },
  ])
);
// split full names into first and last names from [{ name: "Alice Smith" }, { name: "Bob Brown" }] => [["Alice", "Smith"], ["Bob", "Brown"]]
const splitFullNames = function (objects) {
  return objects.map((person) => person.name.split(" "));
};

display(splitFullNames([{ name: "Alice Smith" }, { name: "Bob Brown" }]));
//============================= 40 Qs =======================================//
