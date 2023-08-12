//Array Manipulation

// 1. Add element to an Array
// var arr = ["a", 1, true];
// console.log(arr[2]);

// var arr = new Array();
// arr[0] = "Aozora";
// arr[1] = 102;
// arr[2] = true;
// arr[4] = function(){
//     return 1;
// }
// console.log(arr[4]);

// 2. Delete element in Array
// var arr = ["Aozora", "Umeko", "Rifuki"];
// arr[1] = undefined;
// console.log(arr);


// 3. Display entire Array
// var arr = ["Aozora", "Setsuna", "Yukari"];

// for(var i = 0; i < arr.length; i++){
//     console.log(`Student ${i+1}st : ${arr[i]}`);
// }

// Method in Array
// 1. join
var arr = ["Aozora", "Umeko", "Rifuki"];
console.log(arr.join());
console.log(arr.join("-"));
console.log(arr.join(", "));

// 2. push & pop
arr.push("Setsuna");
arr.push("Yukari", "Asaka", "Sayaka");
console.log(arr);

arr.pop();
arr.pop();
console.log(arr);

// 3. unshift & shift
arr.unshift("Akada");
arr.unshift("Akitomi", "Ayaka");
console.log(arr);

arr.shift();
arr.shift();
arr.shift();
arr.shift();
arr.shift();
console.log(arr);