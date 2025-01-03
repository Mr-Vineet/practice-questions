const display = console.log;
// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) {
  return numbers.reduce(
    (replicatedNums, number) => [...replicatedNums, number, number],
    []
  );
};

display(duplicateNumbers([1, 2, 3]));

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) {
  return arrays.reduce((mergedArray, array) => mergedArray.concat(array), []);
};

display(
  concatenateArrays([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
// flattenArray([[1, 2], [[[3, 4]]], [[5, 6]]]) => [1, 2, 3, 4, 5, 6]
const removeNesting = function (array) {
  Array.isArray(array);
};

const flattenArray = function (arrays) {
  return arrays.reduce(
    (mergedArray, array) => [...mergedArray, removeNesting(array)],
    []
  );
};

// display(flattenArray([[[1, 2]], [3, 4], [5, 6]]));

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) {
  return numbers.reduce(
    (set, number) => (set.includes(number) ? set : [...set, number]),
    []
  );
};

display(uniqueNumbers([1, 2, 2, 3, 4, 4, 5]));
// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple"], 6: ["banana", "cherry" ], 4: ["date"] }
const groupByLength = function (strings) {
  return strings.reduce(function (group, string) {
    if (!(string.length in group)) {
      group[string.length] = [];
    }

    group[string.length].push(string);

    return group;
  }, {});
};

display(groupByLength(["apple", "banana", "cherry", "date"]));
// display(groupByLength(["apple", "banana", "cherry", "date"]));
// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = function (strings) {};

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) {};

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) {};

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {};

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) {};

// =============================== 30 Qs =================================== //

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) {};

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) {};

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) {};

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {};

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) {};

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) {};

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {};

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) {};

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) {};

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) {};

//=================================== 40 Qs =================================//
// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) {};

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) {};

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) {};

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) {};

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) {};

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) {};

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) {};

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) {};

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) {};

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) {};

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) {};

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) {};

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) {};

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const organizeByDate = function (group, { date, value }) {
  if (!(date in group)) {
    group[date] = [];
  }

  group[date].push(value);

  return group;
};

const groupByDate = function (records) {
  return records.reduce(organizeByDate, {});
};

display(
  groupByDate([
    { date: "2024-01-01", value: 10 },
    { date: "2024-01-01", value: 20 },
    { date: "2024-01-02", value: 30 },
  ])
);
// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) {
  const min = numbers.reduce((min, number) => Math.min(min, number), Infinity);
  const max = numbers.reduce((max, number) => Math.max(max, number), -Infinity);

  return { min, max };
};

display(findMinMax([1, 2, 3, 4, 5]));

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) {
  return items.reduce(function (categorySum, { category, value }) {
    categorySum[category] =
      category in categorySum ? categorySum[category] + value : value;

    return categorySum;
  }, {});
};

display(
  sumByCategory([
    { category: "A", value: 10 },
    { category: "B", value: 20 },
    { category: "A", value: 30 },
  ])
);
