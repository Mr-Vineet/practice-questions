// sumOf([1, 2, 3, 4]) => 10
const sumOf = function (numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
};

// console.log(sumOf([1, 2, 3, 4]));

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  return numbers.reduce((product, number) => product * number, 1);
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
  return numbers.reduce((min, number) => Math.min(min, number), Infinity);
};

// console.log(minOf([3, 1, 4, 1, 5, 9, 2]));

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {
  return numbers.reduce((max, number) => Math.max(max, number), -Infinity);
};

// console.log(maxOf([3, 1, 4, 1, 5, 9, 2]));

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const isPositive = (number) => number > 0;

const sumPositiveNumbers = function (numbers) {
  const positiveNumbers = numbers.filter(isPositive);

  return sumOf(positiveNumbers);
};

// console.log(sumPositiveNumbers([1, -2, 3, -4]));

// sumOfSquares([1, 2, 3, 4]) => 30
const square = (number) => Math.pow(number, 2);
const sumOfSquares = function (numbers) {
  const squares = numbers.map(square);

  return sumOf(squares);
};

// console.log(sumOfSquares([1, 2, 3, 4]));

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const isOdd = (number) => (number & 1) === 1;

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
  const evenSquares = squares.filter((number) => isEven(number));

  return sumOf(evenSquares);
};

// console.log(findSumOfEvenSquares([1, 2, 3, 4]));

// ============================== 10 Qs =====================================//

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce(
    (concatenatedWord, word) => concatenatedWord.concat(word),
    ""
  );
};

// console.log(concatenateWords(["hello", "world"]));

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestWord = function (words) {
  return words.reduce(
    (longest, word) => (longest.length < word.length ? word : longest),
    ""
  );
};

// console.log(longestWord(["apple", "banana", "cherry", "leechi", "kiwi"]));

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {
  return words.reduce((shortest, word) =>
    shortest.length > word.length ? word : shortest
  );
};

// console.log(shortestWord(["apple", "banana", "cherry", "kiwi"]));

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {
  const [firstWord, ...restWords] = words;
  const joinedWithComma = restWords.reduce(
    (joinedWord, word) => joinedWord + "," + word,
    ""
  );

  return firstWord + joinedWithComma;
};

// console.log(joinWithComma(["apple", "banana", "cherry"]));

// reverseWords(["hello", "world"]) => "world hello";
const reverseWords = function (words) {
  const [firstWord, ...restWords] = words;
  const reversedWords = restWords.reduce(
    (reversedStr, word) => word + " " + reversedStr,
    ""
  );

  return reversedWords + firstWord;
};

// console.log(reverseWords(["hello", "world", "hola"]));

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  const [firstWord, ...restWords] = words;
  const spaceSeparatedWords = restWords.reduce(
    (spaceJoinedWords, word) => spaceJoinedWords + " " + word,
    ""
  );

  return firstWord + spaceSeparatedWords;
};

// console.log(joinWordsWithSpace(["apple", "banana", "cherry"]));

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return concatenateWords(names);
};

// console.log(concatenateNames(["John", "Jane", "Doe"]));

// countVowelsInWords(["hello", "world"]) => "eoo"
const isVowel = function (char) {
  const vowels = "aeiou";

  return vowels.includes(char.toLowerCase());
};

const extractVowels = function (vowelStr, word) {
  const vowels = [...word].reduce(function (vowelsOnly, char) {
    if (isVowel(char)) {
      return vowelsOnly + char;
    }

    return vowelsOnly;
  }, "");

  return vowelStr + vowels;
};

const extractVowelsInWords = function (words) {
  return words.reduce(extractVowels, "");
};

// console.log(extractVowelsInWords(["hello", "world"]));

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const display = console.log;

const capitalizeFirstChar = function ([...word]) {
  const [firstChar, ...otherChars] = word;

  return firstChar.toUpperCase().concat(otherChars.join(""));
};

const makeCamelCase = function (words) {
  return words.reduce((camelCaseStr, word) =>
    camelCaseStr.concat(capitalizeFirstChar(word))
  );
};

display(makeCamelCase(["hello", "world", "how", "are", "you"]));
// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseString = function (words) {};

// ============================== 20 Qs =====================================//
