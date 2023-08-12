/** Primitives (value)
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Undefined
 * 5. Null
 */

/** Object (references) 
 * 1. Object
 * 2. Array
 * 3. Function
 * 4. Date
 * 5. RegExp
*/

/** Primitives (value) */
const number1 = 1;
const number2 = 1;
const string1 = "ichaicha";
const string2 = "ichaicha";
const boolean1 = false;
const boolean2 = false;
const undefined1 = undefined;
const undefined2 = undefined;
/** end Primitive (value) */
console.log(`number 1 + number 2 = ${number1 === number2}`);
console.log(`string 1 + string 2 = ${string1 === string2}`);
console.log(`boolean 1 + boolean 2 = ${boolean1 === boolean2}`);
console.log(`undefined 1 + undefined 2 = ${undefined1 === undefined2}`);

/** Object (references) */
const object1 = {};
const object2 = {};
const array1 = [1];
const array2 = [1]
const function1 = () => {};
const function2 = () => {};
/** end Object (references) */
console.log(`object 1 + object 2 = ${object1 === object2}`);
console.log(`array 1 + array 2 = ${array1 === array2}`);
console.log(`function 1 + function 2 = ${function1 === function2}`);

const meAgePrimitive = 21;
function incrementAgePrimitive(user){
    user += 1;
    console.log(user);
}
incrementAgePrimitive(meAgePrimitive);

const meObject = {
    age: 21
}
function incrementAgeObject(user){
    user.age += 1;
}
incrementAgeObject(meObject);

let a = 1;
let b = a;
a = 3;
console.log(a);
console.log(b);

let c = {name: "rifuki"};
let d = c;
console.log(c);
console.log(d);
c.name = "aozora";
console.log(c);
console.log(d);