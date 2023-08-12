//"use strict"

//Global Scope
// var a = 1;

// if (a % 2 === 0) {
//     var even = true;
// }

// if (even) {
//     console.log("Even");
// }

//Function Scope
// function test(){
//     var b = 2;
//     console.log(a);
//     console.log(b);
// }

// function test(){
//     //Name Conflict
//     var a = 2;
//     console.log(a);
//     console.log(window.a);
//     console.log(this.a);
// }

// test();

// console.log(a);

var a = 1;

function test(a){
    //catch local variable
    console.log(`Local Variable : ${a}`);
}

test(a);
//catch global variable
console.log(`Global Variable : ${a}`);