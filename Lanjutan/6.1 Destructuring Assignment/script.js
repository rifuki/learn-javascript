// Destructuring Variable / Assignment

// Destructuring Array

// const introduce = ["Hello", "My", "Name", "Aozora"];

// const [greeting, one, two, three] = introduce;
// const [greeting, , , three] = introduce;
// console.log(three);

// Swap Items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// Return value in function
// function test(){
//     return [1, 2];
// }

// const [a, b] = test();
// console.log(a);

// Rest parameter
// const [a, ...args] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(args);

// Destructuring Object
// const student = {
//     name: "Aozora Umeko",
//     age: 20
// }
// const {name, age} = student;
// console.log(name);

// Assignment without object declaration
// ({ name, age } = {
//   name: "Aozora Umeko",
//   age: 20,
// });
// console.log(name);

// Assign to new variable
// const student = {
//     name: "Aozora Umeko",
//     age: 20
// }
// const {name:nama, age:umur} = student;
// console.log(nama + umur);

//Give Default Value
// const student = {
//     name: "Aozora Umeko",
//     age: 20,
// }
// const {name, age, email = "Email@domain"} = student;
// console.log(email);

// Give Default Value + assign to new variable
// const student = {
//   name: "Aozora Umeko",
//   age: 20,
// };
// const { name: nama, age: umur, email: mail = "email@domain" } = student;
// console.log(mail);

// Rest Parameter
// const student = {
//     name: "Aozora Umeko",
//     age: 20,
//     email: "aozoraumeko@gmail.com"
// }
// const {name, ...args} = student;
// console.log(name, args);

// Retrieves the field in the object, after it is sent as a parameter to the function
const student = {
  id: 123,
  name: "Aozora Umeko",
  age: 20,
  email: "aozoraumeko@gmail.com",
};
function getIdStudent({ id, ...args }) {
  return args;
}
console.log(getIdStudent(student));
