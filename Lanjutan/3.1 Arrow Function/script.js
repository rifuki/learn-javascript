// Function Declaration
function showMessage(name) {
  console.log(`Function Declaration ${name}`);
}

showMessage("Aozora");

// Function Expression
let showMessage1 = function (name) {
  console.log(`Function Expression ${name}`);
};

showMessage1("Setsuna");

// Arrow Function
let ShowMessage2 = (name) => {
  console.log(`Arrow Function ${name}`);
};

ShowMessage2("Rifuki");

let helloWorld = () => {
  return console.log("Hello World");
};
helloWorld();

// implicit arrow functionss
let ShowMessage3 = (name) => console.log(`Arrow Function implicit ${name}`);
ShowMessage3("OHeo");

let showMessage3 = (name, time) => {
  console.log(`Arrow Function ${time}, ${name}`);
};

showMessage3("Aozora Umeko", "Evening");

let students = ["Aozora", "Setsuna Rika", "Rifuki"];
// Function Expression
// let totalLetter = students.map(function (name) {
//   return name.length;
// });
// console.log(totalLetter);

// let totalLetter1 = students.map((name)=> name.length);
// console.log(totalLetter1);

let totalLetter2 = students.map((student, index) => {
  return ({
    id: index+1,
    name: student,
    totalLetter: student.length,
  });
});
console.table(totalLetter2);
