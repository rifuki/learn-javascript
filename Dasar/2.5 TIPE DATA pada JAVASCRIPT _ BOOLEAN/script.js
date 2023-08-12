//Boolean
var value1;
var value2;
var result;

// value1 = 10;
// value2 = 20;
// result = Boolean(value1 < value2);
// console.log(`${value1} < ${value2} is ${result}`);

//true
value1 = true;
result = Boolean(value1);
console.log(`${value1} is ${result}`);
//non-zero number
value1 = 1;
result = Boolean(value1);
console.log(`${value1} is ${result}`);
//non-zero number
value1 = -1;
result = Boolean(value1);
console.log(`${value1} is ${result}`);
//string
value1 = "Aozora";
result = Boolean(value1);
console.log(`${value1} is ${result}`);
///object
value1 = {};
result = Boolean(value1);
console.log(`${value1} is ${result}`);
//array
value1 = [1, 2, 3];
result = Boolean(value1);
console.log(`${value1} is ${result}`);
//function
value1 = function() {};
result = Boolean(value1);
console.log(`${value1} is ${result}`);

//false
var value2 = false;
result = Boolean(value2);
console.log(`${value2} is ${result}`);
//zero number
value2 = 0;
result = Boolean(value2);
console.log(`${value2} is ${result}`);
//empty string
value2 = "";
result = Boolean(value2);
console.log(`\"${value2}\" is ${result}`);
//undefined
value2 = undefined;
result = Boolean(value2);
console.log(`${value2} is ${result}`);
//null
value2 = null;
result = Boolean(value2);
console.log(`${value2} is ${result}`);
//NaN
value2 = NaN;
result = Boolean(value2);
console.log(`${value2} is ${result}`);