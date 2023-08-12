// Callback
// Synchronous Callback
// function hello(name) {
//   alert(`Hello, ${name}`);
// }
// function showMessage(callback) {
//   const name = prompt("Enter Your Name : ");
//   callback(name);
// }
// showMessage(hello);

// function showMessage(callback) {
//   const name = prompt("Enter Your Name : ");
//   callback(name);
// }
// showMessage((name) => alert(`Hello, ${name}`));

// const students = [
//   {
//     name: "Aozora Umeko",
//     nim: "639219930593",
//     email: "aozoraumeko@gmail.com",
//     departement: "Art Design",
//     idGuardianLecturer: 1,
//   },
//   {
//     name: "Setsuna Rika",
//     nim: "659673485348",
//     email: "setsunarika@gmail.com",
//     departement: "Etnomusiclogi",
//     idGuardianLecturer: 2,
//   },
//   {
//     name: "Ahane Sayaka",
//     nim: "527001564370",
//     email: "ahanesayaka@gmail.com",
//     departement: "Puppet Arts",
//     idGuardianLecturer: 3,
//   },
// ];

// console.log("start");
// students.forEach((s) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(s.name);
// });
// console.log("end");

// // Asynchronus Callback
// console.log("start");
// function getDataStudent(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open("get", url);
//   xhr.send();
// }
// // function success() {}
// // function error() {}
// getDataStudent(
//   "data/students.json",
//   (results) => {
//     const students = JSON.parse(results);
//     students.forEach(s => console.log(s.name));
//   },
//   () => {}
// );
// console.log("end");

// // JQuery
console.log("start");
$.ajax({
  url: "./data/students.json",
  success: (students) => {
    students.forEach((s) => console.log(s.name));
  },
  error: (e) => console.log(e),
});
console.log("end");
