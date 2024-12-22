
// filter people older than a certain age [{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 22}] => [{name: "Bob", age: 30}]
const filterByAge = function (people, age) { };

// filter products that are cheaper than a given price [{name: "item1", price: 20}, {name: "item2", price: 50}, {name: "item3", price: 10}] => [{name: "item1", price: 20}, {name: "item3", price: 10}]
const filterByPrice = function (products, price) { };

// filter students who scored above a certain grade in Math [{name: "John", grades: {math: 80, science: 90}}, {name: "Jane", grades: {math: 70, science: 85}}] => [{name: "John", grades: {math: 80, science: 90}}]
const filterByMathGrade = function (students, grade) { };

// filter events that occur before a certain date [{name: "Event1", date: "2024-12-01"}, {name: "Event2", date: "2024-11-15"}] => [{name: "Event2", date: "2024-11-15"}]
const filterByDate = function (events, date) { };

// filter employees who earn more than a certain salary [{name: "Alice", salary: 5000}, {name: "Bob", salary: 7000}] => [{name: "Bob", salary: 7000}]
const filterBySalary = function (employees, salary) { };

// filter orders with a quantity greater than a given number [{orderId: 1, quantity: 10}, {orderId: 2, quantity: 5}] => [{orderId: 1, quantity: 10}]
const filterByQuantity = function (orders, quantity) { };

// filter books published after a certain year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterByYear = function (books, year) { };

// filter students with a grade higher than a given threshold in a specific subject [{name: "Alice", grades: {math: 90, science: 80}}, {name: "Bob", grades: {math: 70, science: 85}}] => [{name: "Alice", grades: {math: 90, science: 80}}]
const filterBySubjectGrade = function (students, subject, threshold) { };

// filter photos with a minimum number of likes [{id: 1, likes: 100}, {id: 2, likes: 50}] => [{id: 1, likes: 100}]
const filterByLikes = function (photos, likes) { };

// filter users who have made a certain number of posts [{username: "Alice", posts: 10}, {username: "Bob", posts: 5}] => [{username: "Alice", posts: 10}]
const filterByPostCount = function (users, postCount) { };

//============================= 30 Qs ========================================//

// Apply a discount to each item's price, then filter for items under a certain price [{name: "item1", price: 100}, {name: "item2", price: 50}] => [{name: "item2", price: 45}]
const filterDiscountedItems = function (items, discount, maxPrice) { };

// Convert product names to uppercase, then filter for products with names longer than a certain number [{name: "apple"}, {name: "banana"}] => [{name: "APPLE"}]
const filterLongProductNames = function (products, minLength) { };

// Group users by their age, then filter for specific age groups [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const filterAgeGroups = function (users, ageGroup) { };

// Convert grades to letter grades, then filter for students who passed [{name: "Alice", grade: 90}, {name: "Bob", grade: 55}] => [{name: "Alice", grade: 90}]
const filterPassingGrades = function (students, passingGrade) { };

// Calculate VAT-inclusive prices, then filter for those over a certain threshold [{name: "item1", price: 100}, {name: "item2", price: 50}] => [{name: "item1", price: 120}]
const filterHighPriceWithVAT = function (products, vatRate, threshold) { };

// Calculate the length of each name, then filter for names longer than a given number [{name: "Alice"}, {name: "Bob"}] => [{name: "Alice"}]
const filterLongNames = function (people, minLength) { };

// Normalize scores to a standard range, then filter for students who passed [{name: "John", score: 50}, {name: "Jane", score: 80}] => [{name: "Jane", score: 80}]
const filterNormalizedScores = function (students, minScore) { };

// Convert book publication dates, then filter for books published after a given year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterRecentBooks = function (books, yearThreshold) { };

// Count the number of posts for each user, then filter for users with more than a specific number of posts [{username: "Alice", posts: 100}, {username: "Bob", posts: 50}] => [{username: "Alice", posts: 100}]
const filterActivePosters = function (users, postThreshold) { };

// Convert students' grades to letter grades, then filter for students who received a specific grade [{name: "Alice", grade: 90}, {name: "Bob", grade: 85}] => [{name: "Alice", grade: 90}]
const filterSpecificGrade = function (students, grade) { };

//============================= 40 Qs ========================================//
