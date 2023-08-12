//Recursive Function
// function test(){
//     return test();
// }

// test();

// for(var i = 10; i >= 1; i--){
//     console.log(i);
// }

// function showNumber(n) {
//     if (n === 0) {
//         return; 
//     }
//     console.log(n);
//     return showNumber(n - 1);
// }

// showNumber(100);

//factorial
function factorial(n) {
    console.log(n);
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

var result = factorial(5);
console.log(result);
