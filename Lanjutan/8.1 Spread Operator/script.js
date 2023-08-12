// Spread Operator

// Concat
// const student = ["Aozora", "Setsuna", "Rifuki"];
// const lecturer = ["Ade", "Hendra", "Wanda"];
// // const person = [...student, ...lecturer];
// // const person = student.concat(lecturer);
// // const person = [...student, "Aji", ...lecturer];
// console.log(person);

// Copy Array
const student = ["Aozora", "Setsuna", "Rifuki"];
// // Make Reference
// const student1 = student;
// console.log(student1);
// student1[0] = "Akitomi";
// console.log(student1);
// console.log(student);

// const student1 = [...student];
// console.log(student1);
// student1[0] = "Akitomi";
// console.log(student1);
// console.log(student);

// const liStudent = Array.from(document.querySelectorAll(".student"));
// const mhs = new Array();

// liStudent.forEach((a, i) => mhs.push(a.textContent));
// const liStudent = document.querySelectorAll(".student");
// const mhs = [...liStudent].map(m => m.textContent);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;