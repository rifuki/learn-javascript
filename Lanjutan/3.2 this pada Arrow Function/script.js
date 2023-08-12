// Constructor Function
// const Student = function () {
//   this.name = "Aozora";
//   this.age = 20;
// };

// Student.prototype.sayHello = function(){
//     console.log(`Hello my name is ${this.name}, and i'm ${this.age} years old`);
// }

// // console.log(Student);
// const Aozora = new Student();
// console.log(Aozora);

// Arrow Function
// const Student = function () {
//   this.name = "Setsuna";
//   this.age = 21;
// };
// Student.prototype.sayHello = () => {
//   console.log(`Hello my name is ${this.name}, and i'm ${this.age} years old`);
// };
// const Setsuna = new Student();

// const Student1 = {
//   name: "Sayaka",
//   age: 21,
//   sayHello: () => {
//     // console.log(
//     //   `Hello, my name is ${this.name}, and i'm ${this.age} years old`
//     // );
//     console.log(this);
//   },
// };

// console.log(Student1);

// const Student = function () {
//   this.name = "Aozora";
//   this.age = 20;
//   this.sayHello = function () {
//     console.log(`Hello my name is ${this.name}, and i'm ${this.age} years old`);
//   };

//   setInterval(() => {
//     return console.log((this.age += 1));
//   }, 500);
// };

// const Student1 = new Student();

// Study Cases
// const box = document.querySelector(".box");
// box.addEventListener("click", function () {
//   let that = this;

//   this.classList.toggle("size");
//   setTimeout(function () {
//     that.classList.toggle("caption");
//   }, 600);
// });

// const box = document.querySelector(".box");
// box.addEventListener("click", function () {
//   let satu = "size";
//   let dua = "caption";
//   if (this.classList.contains(satu)) {
//     [satu, dua] = [dua, satu];
//   }
//   this.classList.toggle(satu);
//   setTimeout(() => {
//     this.classList.toggle(dua);
//   }, 600);
// });

// const box = document.querySelector(".box");
// box.addEventListener("click", function () {
//   this.classList.toggle("size");
//   setTimeout(function () {
//     console.log(this);
//   }, 1);
// });

const Mahasiswa = function () {
  this.nama = "Rifki";
  this.nim = "1910111401905";
  this.semester = 6;

  a();
  var a = () => {
    console.log(this);
  };

  function b() {
    console.log(this);
  }

  b();
};

const test = new Mahasiswa();
