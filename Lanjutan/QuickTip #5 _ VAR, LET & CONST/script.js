// VAR
// // console.log(i);
// var i = 10;
// console.log(i);

// function test() {
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }
// test();

// IIFE
// (function () {
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }());

// LET
// for(let i = 0; i < 10; i++){
//     console.log(i+1);
// }

// CONST
// for (const i = 0; i < 10; i++) {
//     console.log(i + 1);
// }

const i = [1, 2, 3, 4];

// i = [1, 2, 3, 5];

const student = {
    name: "Aozora",
    age: 20
}

student["age"] = 100000;
console.log(student);

i.pop();
i.push(5);
i.unshift(0);
console.log(i);