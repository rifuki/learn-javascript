var operand1;
var operand2;
var hasil;

//Akurasi sampai 15 Digit
operand1 = 999999999999999;
hasil = operand1;
console.log(`Kurang sama dengan 15 digit = ${hasil}`);
operand2 = 9999999999999999;
hasil = operand2;
console.log(`Lebih dari 15 digit = ${hasil}`);

//Exponential
operand1 = 2e10;
hasil = operand1;
console.log(`2e10 = ${hasil}`);

//Tipe Data NaN (angka spesial)
operand1 = 0;
operand2 = 0;
hasil = operand1 / operand2;
console.log(`${operand1} / ${operand2} = ${hasil}`);

//Tipe Data Infinity  (angka spesial)
operand1 = 2;
operand2 = 0;
hasil = operand1 / operand2;
console.log(`${operand1} / ${operand2} = ${hasil}`);

//Tipe Data MinusInfinity (angka spesial)
operand1 = -2;
operand2 = 0;
hasil = operand1 / operand2;
console.log(`${operand1} / ${operand2} = ${hasil}`);

//Hexadecimal
operand1 = 0xFF;
hasil = operand1;
console.log(`0XFF = ${hasil}`);

//Octaldecimal
operand1 = 022;
hasil = operand1;
console.log(`022 = ${hasil}`);