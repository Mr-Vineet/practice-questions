// sumOf([1, 2, 3, 4]) => 10
const sumOf = function (numbers) {
  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);
};

// console.log(sumOf([1, 2, 3, 4]));

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  return numbers.reduce(function (product, number) {
    return product * number;
  }, 1);
};

// console.log(productOf([1, 2, 3, 4]));

// averageOf([1, 2, 3, 4, 5]) => 3

const averageOf = function (numbers) {
  const sumOfNumbers = sumOf(numbers);

  return sumOfNumbers / numbers.length;
};

// console.log(averageOf([1, 2, 3, 4, 5]));

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {
  return numbers.reduce(function (min, number) {
    return Math.min(min, number);
  }, Infinity);
};

// console.log(minOf([3, 1, 4, 1, 5, 9, 2]));

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {
  return numbers.reduce(function (max, number) {
    return Math.max(max, number);
  }, -Infinity);
};

// console.log(maxOf([3, 1, 4, 1, 5, 9, 2]));

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const isPositive = function (number) {
  return number > 0;
};

const sumPositiveNumbers = function (numbers) {
  const positiveNumbers = numbers.filter(isPositive);

  return sumOf(positiveNumbers);
};

// console.log(sumPositiveNumbers([1, -2, 3, -4]));

// sumOfSquares([1, 2, 3, 4]) => 30
const square = function (number) {
  return Math.pow(number, 2);
};

const sumOfSquares = function (numbers) {
  const squares = numbers.map(square);

  return sumOf(squares);
};

// console.log(sumOfSquares([1, 2, 3, 4]));

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const isOdd = function (number) {
  return (number & 1) === 1;
};

const sumOfOddNumbers = function (numbers) {
  const oddNumbers = numbers.filter(isOdd);

  return sumOf(oddNumbers);
};

// console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));

// countNegativeNumbers([1, -2, 3, -4]) => 2
const invert = function (f) {
  return function (...args) {
    return !f(...args);
  };
};

const countNegatives = function (count, number) {
  const isNegative = invert(isPositive);

  return isNegative(number) ? count + 1 : count;
};

const countNegativeNumbers = function (numbers) {
  return numbers.reduce(countNegatives, 0);
};

// console.log(countNegativeNumbers([1, -2, 3, -4, -9]));

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {
  const squares = numbers.map(square);
  const isEven = invert(isOdd);
  const evenSquares = squares.filter(function (number) {
    return isEven(number);
  });

  return sumOf(evenSquares);
};

// console.log(findSumOfEvenSquares([1, 2, 3, 4]));
// ============================== 10 Qs =====================================//

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) { };

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestWord = function (words) { };

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) { };

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) { };

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) { };

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) { };

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) { };

// countVowelsInWords(["hello", "world"]) => "eoo"
const countVowelsInWords = function (words) { };

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) { };

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseString = function (words) { };

// ============================== 20 Qs =====================================//