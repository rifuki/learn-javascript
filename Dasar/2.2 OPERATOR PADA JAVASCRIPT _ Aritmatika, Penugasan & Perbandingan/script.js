//Operator Binary
var operand1;
var operand2;
var result;

//Arithmetic Operator(+, -, *, /, %)
console.log(`Arithmetic Operator`);
operand1 = 2;
operand2 = 1;
//additon
result = `${operand1 + operand2}`;
console.log(`Addition : ${operand1} + ${operand2} = ${result}`);
//subtraction
result = `${operand1 - operand2}`;
console.log(`Subtraction: ${operand1} + ${operand2} = ${result}`);
//multiplication
result = `${operand1 * operand2}`;
console.log(`Multiplication: ${operand1} * ${operand2} = ${result}`);
//divison
result = `${operand1 / operand2}`;
console.log(`Division: ${operand1} / ${operand2} = ${result}`);
//modulus
result = `${operand1 % operand2}`;
console.log(`Moduus: ${operand1} % ${operand2} = ${result}`);
console.log(`End of Arithmetic Operator`);
//End of Arithmetic

//Assignment Operator (=, +=, -=, *=, /=, %=)
console.log(`Assignment Operator`);
var x, temp;
x = 10;
console.log(`x = ${x}`);
temp = x;
operand1 = 10;
x += operand1;
console.log(`${temp} += ${operand1} : ${x}`);
temp = x;
operand1 = 5
x -= operand1;
console.log(`${temp} -= ${operand1} : ${x}`);
temp = x;
operand1 = 2;
x *= operand1;
console.log(`${temp} *= ${operand1} : ${x}`);
temp = x;
operand1 = 3
x /= operand1;
console.log(`${temp} /= ${operand1} : ${x}`);
temp = x;
operand1 = 3;
x %= operand1;
console.log(`${temp} %= ${operand1} : ${x}`);
console.log(`End of Assginment Operator`);
//End of Assignment Operator

//Comparison Operator (==, !=, ===, !==, >, <, >=, <=)
console.log(`Comparison Operator`);
operand1 = 10;
operand2 = "10";
//equal
result = operand1 == operand2;
console.log(`${operand1} == ${operand2} : ${result}`);
//not equal
result = operand1 != operand2;
console.log(`${operand1} != ${operand2} : ${result}`);
//strict equal
result = operand1 === operand2;
console.log(`${operand1} === ${operand2} : ${result}`);
//strict not equal
result = operand1 !== operand2;
console.log(`${operand1} !== ${operand2} : ${result}`);

operand1 = 6;
operand2 = 4;
//bigger than
result = operand1 > operand2;
console.log(`${operand1} > ${operand2} : ${result}`);
//less than
result = operand1 < operand2;
console.log(`${operand1} < ${operand2} : ${result}`);
//bigger than equal
result = operand1 >= operand2;
console.log(`${operand1} >= ${operand2} : ${result}`);
//less than equal
result = operand1 <= operand2;
console.log(`${operand1} <= ${operand2} : ${result}`);
console.log(`End of Comparison Operator`);
//End of Comparison Operator