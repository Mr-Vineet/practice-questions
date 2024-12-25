const stringMap = function (string, mapper) {
  return string.split("").map(mapper).join("");
};

// squares of [1, 2, 3] => [1, 4, 9]
const square = function (number) {
  return Math.pow(number, 2);
};

const squaresOf = function (numbers) {
  return numbers.map(square);
};

// console.log(squaresOf([0, 1, 2, 3, 4]));

// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]
const evaluateLength = function (string) {
  return string.length;
};

const lengthsOf = function (strings) {
  return strings.map(evaluateLength);
};

// console.log(lengthsOf(["apple", "banana", "kiwi"]));

// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]
const convertToUppercase = function (string) {
  return string.toUpperCase();
};

const uppercaseOf = function (strings) {
  return strings.map(convertToUppercase);
};

// console.log(uppercaseOf(["hello", "world"]));

// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]
const extractfirstChar = function (string) {
  return string.at(0);
};

const firstCharactersOf = function (strings) {
  return strings.map(extractfirstChar);
};

// console.log(firstCharactersOf(["apple", "banana", "kiwi"]));

// truth values of [0, 1, 2, 3] => [false, true, true, true]
// Assume non-zero numbers are true, and zero is false
const evaluateTruthValue = function (number) {
  return number !== 0;
};

const truthValuesOf = function (numbers) {
  return numbers.map(evaluateTruthValue);
};

// console.log(truthValuesOf([0, 1, 2, 3]));

// reverse strings of ["hello", "world"] => ["olleh", "dlrow"]
const acquireReverseStr = function (string) {
  return [...string].reverse().join("");
};

const reversedStringsOf = function (strings) {
  return strings.map(acquireReverseStr);
};

// console.log(reversedStringsOf(["hello", "world"]));

// double letters of ["cat", "dog", "bat"] => ["ccaatt", "ddoogg", "bbaatt"]
const double = function (char) {
  return char.repeat(2);
};

const createDoubleLetteredStr = function (string) {
  return [...string].map(double).join("");
};

const doubleLettersOf = function (strings) {
  return strings.map(createDoubleLetteredStr);
};

// console.log(doubleLettersOf(["cat", "dog", "bat"]));

// boolean negation of [true, false, true] => [false, true, false]
const invert = function (boolean) {
  return !boolean;
};

const negatedBooleansOf = function (booleans) {
  return booleans.map(invert);
};

// console.log(negatedBooleansOf([true, false, true]));

// character codes of ["a", "b", "c"] => [97, 98, 99]
// Use the `charCodeAt` method on each string
const acquireCharCode = function (char) {
  return char.charCodeAt();
};

const charCodesOf = function (strings) {
  return strings.map(acquireCharCode);
};

// console.log(charCodesOf(["a", "b", "c"]));

// extract domain names from ["user1@gmail.com", "admin@yahoo.com"] => ["gmail.com", "yahoo.com"]
const extractDomainName = function (email) {
  const domainName = email.split("@").at(-1);

  return domainName;
};

const domainNamesOf = function (emails) {
  return emails.map(extractDomainName);
};
//==== ========================= 10 Qs =======================================//

// console.log(domainNamesOf(["user1@gmail.com", "admin@yahoo.com", "vineet.jain1@thoughtworks.com"]));

// split words in ["hello world", "goodbye moon"] => [["hello", "world"], ["goodbye", "moon"]]
const splitWords = function (string) {
  return string.split(" ");
};

const splitWordsOf = function (strings) {
  return strings.map(splitWords);
};

// console.log(splitWordsOf(["hello world", "goodbye moon"]));

// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"]
const joinArray = function (array) {
  return array.join("");
};

const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(joinArray);
};

// console.log(joinedArraysOf([["a", "b"], ["c", "d"]]));

// repeat strings in ["hi", "bye"] => ["hihi", "byebye"]
const repeatedStringsOf = function (strings) {
  return strings.map(double);
};

// console.log(repeatedStringsOf(["hi", "bye"]));

// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]
const isVowelPresent = function (char) {
  const vowels = "aeiou";

  return vowels.includes(char.toLowerCase());
};

const incrementIfVowelPresent = function (count, char) {
  return isVowel(char) ? count + 1 : count;
};

const countVowels = function (string) {
  return [...string].reduce(incrementIfVowelPresent, 0);
};

const countVowelsOf = function (strings) {
  return strings.map(countVowels);
};

// console.log(countVowelsOf((["apple", "banana", "grape"])));
// console.log(countVowelsOf((["ppl", "banana", "grp"])));

// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]
const acquireReversedArray = function (array) {
  return [...array].reverse();
};

const reversedArraysOf = function (arrays) {
  return arrays.map(acquireReversedArray);
};

// console.log(reversedArraysOf([[1, 2, 3], [4, 5, 6]]));

// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]
const sliceOutVowels = function (char) {
  return isVowel(char) ? "" : char;
};

const removeVowels = function (string) {
  return [...string].map(sliceOutVowels).join("");
};

const withoutVowelsOf = function (strings) {
  return strings.map(removeVowels);
};

// console.log(withoutVowelsOf(["apple", "banana", "grape"]));

// cumulative sums of [[1, 2, 3], [4, 5, 6]] => [[1, 3, 6], [4, 9, 15]]
// Example: cumulative sum of [1, 2, 3] is [1, 1+2, 1+2+3]
const evaluateRunningSum = function (array) {
  let sum = 0;

  return array.map(function (element) {
    sum += element;

    return sum;
  });
};

const cumulativeSumsOf = function (arrays) {
  return arrays.map(evaluateRunningSum);
};

// console.log(cumulativeSumsOf([[1, 2, 3], [4, 5, 6]]));

// reverse words in ["hello world", "goodbye moon"] => ["olleh dlrow", "eybdoog noom"]
const reverseWords = function (string) {
  const reversedWords = string.split(" ").map(acquireReverseStr);

  return reversedWords.join(" ");
};

const reversedWordsOf = function (strings) {
  return strings.map(reverseWords);
};

// console.log(reversedWordsOf(["hello world", "goodbye moon"]));

// extract unique characters from ["apple", "banana", "grape"] => ["aple", "ban", "grape"]
// Maintain the order of their first appearance in each string

const removeDuplicates = function ([...array]) {
  const uniqueChars = array.reduce(function (set, char) {
    if (set.includes(char)) {
      return set;
    }

    return [...set, char];
  }, []);

  return uniqueChars.join("");
};

const uniqueCharactersOf = function (strings) {
  return strings.map(removeDuplicates);
};

console.log(uniqueCharactersOf(["apple", "banana", "grape"]));

// generate ranges from [3, 5, 2] => [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]
const generateRange = function (end) {
  const numbers = [];

  for (let index = 0; index < end; index++) {
    numbers.push(index);
  }

  return numbers;
};

const rangesOf = function (numbers) {
  return numbers.map(generateRange);
};

// console.log(rangesOf([3, 5, 2]))

//============================= 20 Qs =======================================//
