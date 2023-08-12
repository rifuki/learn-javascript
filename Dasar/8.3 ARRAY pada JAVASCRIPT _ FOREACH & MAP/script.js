// Array Manipulation 3

// forEach
// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// var namae = ["Aozora", "Sayaka", "Rifuki"];
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function (e) {
//     console.log(e);
// });

// namae.forEach(function (e, i) {
//     console.log(`Person ${i + 1} is ${e}`);
// })

// Map
// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var newNumberX2 = number.map(function (e) {
//     return e*2;
// })

// console.log(newNumberX2.join(", "));

// Sort
var number = [2, 8, 9, 12, 10, 11, 1, 5, 4, 3, 6, 7, 0];
console.log(number.join(", "));
number.sort();
console.log(number);

number.sort(function(a, b){
    return a - b;
})
console.log(number.join(", "));