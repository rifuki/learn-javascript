// For..Of
const students = ["Aozora", "Rifuki", "Sestuna"];

// for (let i = 0; i < student.length; i++) {
//   console.log(students[i]);
// }

// forEach is special for Array
// students.forEach(student => console.log(student));

// // For..Of
// for (const m of students) {
//   console.log(m);
// }

// String
// const namae = `Aozora`;
// for(const n of namae){
//     console.log(n);
// }

// With index destructuring
// for (const [i, m] of students.entries()){
//     console.log(`${i}. ${m}`);
// }

const liName = document.querySelectorAll(".name");

// liName.forEach(n => console.log(n));

// for(const n of liName){
//     console.log(n.textContent)
// }

// // Arguments
// function sumTheNumber() {
//   //   return arguments.reduce((a, i) => a + i, 0);
//   let total = 0;
//   //   arguments.forEach((a) => (total += a));
//   for (const a of arguments) {
//     total += a;
//   }
//   return total;
// }

// console.log(sumTheNumber(1, 2, 3, 4, 5));

// For..in only for property in object
const student = {
    name: "Aozora",
    age: 20,
    email: "aozoraumeko@gmail.com"
}

for(const m in student){
    console.log(student[m])
}