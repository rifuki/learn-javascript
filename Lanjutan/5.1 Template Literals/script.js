// Template Literals / Template String
const namae = "Aozora";
const age = 20;
console.log(`Hello, my name ${namae}, and i'm ${age} years old`);
console.log("Hello, my name " + namae + ", and i'm " + age + " years old");

// Embedded Expressions
console.log(`${1 + 1}`);
// console.log(`${alert("Hello")}`);
const x = 11;
console.log(`${x % 2 === 0 ? "Even" : "Odd"}`);

// HTML Fragments
const student = {
    name: "Aozora Umeko",
    age: 20,
    nim: "191011401905",
    email: "aozoraumeko@icloud.com"
}

const el = `<div class="student">
    <h2>${student.name}</h2>
    <span class="nim">${student.nim}</span>
</div>`

console.log(el);