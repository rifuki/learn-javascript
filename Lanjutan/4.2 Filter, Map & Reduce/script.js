const numbers = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Filter number >= 3 using For
const newNumbers = new Array();
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 1) {
    newNumbers.push(numbers[i]);
  }
}
console.log(numbers);
console.log(newNumbers.sort());

// Filter HOF
const newNumbersFilter = numbers.filter((number) => number >= 3);

console.log(newNumbersFilter);

// Map HOF
const newNumbersMap = numbers.map((number) => number * 2);
console.log(newNumbersMap);

// for Each
numbers.forEach((number) => {
  return console.log(number * 5);
});

// Reduce
// Sum all the element in the arrays
const newNumbersReduce = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(newNumbersReduce);

// Method Chaining
// Find number > 5
// Multiply 3
// Sum

const result = numbers
  .filter((number) => number > 5)
  .map((number) => number * 3)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(result);