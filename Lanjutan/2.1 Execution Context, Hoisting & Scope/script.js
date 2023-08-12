// Execution Context and Hoisting

// console.log(nama);
// var nama = "Aozora";

// creation phase in global context
// variable name = undefined
// name function = fn();   
// hoisting / mengangkat
// window = global object
// this = window


// execution phase
// console.log(sayHello());

// var namae = "Aozora";
// var age = 20;

// function sayHello() {
//     return (`Hello, my name ${namae}, i'm ${age} years old`);
// }


// function make Local Execution Context
// which there is a creation and execution phase
// window
// arguments
// hoisting

// var namae = "Aozora Umeko";
// var username = "@AozoraUmeko";

// function printURL(username){
//     var instagramURL = `http://instagram.com/`;
//     return instagramURL + username;
// }

// console.log(printURL(username));

// function a() {
//     console.log("This is a");
//     function b() {
//         console.log("This is b");
//         function c(){
//             console.log("This is c");
//         }
//         c();
//     }
//     b();
// }
// a();


// Scope

// var namae = "Aozora Umeko";
// var username = "@AozoraUmeko";

// function printURL(username){
//     console.log(arguments);
//     var instagramURL = `http://instausernamegram.com/`;
//     return instagramURL + username;
// }

// console.log(printURL("username"));

// Answer Exercise
/* 
1. undefined
2. Sandhika
3. Erik
4. Erik
*/

function satu(){
    var namae = "Aozora";
    console.log(namae);
}

function dua(){
    console.log(namae);
}

console.log(namae);
var namae = "Setsuna";
satu();
dua("Erize");
console.log(namae);