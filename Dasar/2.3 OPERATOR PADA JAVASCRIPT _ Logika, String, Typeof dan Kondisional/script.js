var operand1;
var operand2;
var result;

//Logical Operator
console.log(`Logical Operator`);
operand1 = 8;
operand2 = 5;
result = operand1 % 2 === 0;
console.log(`${operand1} % 2 === 0 : ${result}`);
result = operand1 % 2 === 1;
console.log(`${operand1} % 2 === 1 : ${result}`);
//AND
result = (operand1 % 2 === 0) && (operand1 < 10);
console.log(`(${operand1} % 2 === 0) && (${operand1} < 10) : ${result}`);
result = (operand1 % 2 === 0) && (operand1 < 8);
console.log(`(${operand1} % 2 === 0) && (${operand1} < 8) : ${result}`);
//OR
result = (operand1 % 2 === 0) || (operand1 > 8);
console.log(`(${operand1} % 2 === 0) && (${operand1} > 8) : ${result}`);
result = (operand1 % 2 === 0) || (operand1 < 8);
console.log(`(${operand1} % 2 === 0) || (${operand1} < 8) : ${result}`);
//NOT
result = !(operand1 % 2 === 0);
console.log(`!(${operand1} % 2 === 0) : ${result}`);
result = !(operand1 % 2 === 1);
console.log(`!(${operand1} % 2 === 1) : ${result}`);
console.log(`End of Logical Operator`);
//End of Logical Operator

//String Operator
console.log("String Operator");
var a = "Apple";
var b = "Pen";
console.log(a + " + " + b + " = " + a + b);

result = 10 + 10 + "10";
console.log(`10 + 10 + "10" = ${result}`);

result = "10" + 10 + 10;
console.log(`"10" + 10 + 10 = ${result}`);
console.log("End of String Operator");
//End of String Operator

//End of Binary Operator

// Unary Operator
result = typeof(operand1);
console.log(`${operand1} is ${result}`);
result = typeof(a);
console.log(`${a} is ${result}`);
// End of Unary Operator

// Conditional Operator
result = operand1 % 2 === 0 ? "Even" : "Odd";
console.log(`${operand1} % 2 === 0 is ${result}`);
// End of Conditional