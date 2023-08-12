// Destructuring

// Array
// function calculation(a, b) {
//   return [a + b, a - b, a * b];
// }
// const [addition, subtract, multiplication, divide = 0.1234] = calculation(2, 3);

// Object
// const calculation = function (a, b) {
//   return {
//     addition: a + b,
//     subtraction: a - b,
//     multiplication: a * b,
//     division: a / b,
//   };
// };
// const {subtraction, addition, multiplication, division} = calculation(2, 3);

// Destructuring function arguments
const student1 = {
  name: "Aozora Umeko",
  age: 20,
  email: "aozoraumeko@icloud.com",
  score: {
    assignment: 80,
    midtermExam: 85,
    finalExam: 90
  }
};

// function printStudent(name, age){
//     return `Hello, my name is ${name}, i'm ${age} years old`;
// }

// const cetak = printStudent(student1['name'], student1.age);
// console.log(cetak);

function printStudent({ name, age, score: { midtermExam} }) {
  return `Hello, my name is ${name}, i'm ${age} years old, and my midtem exam is ${midtermExam}`;
}

const print = printStudent(student1);
console.log(print);
