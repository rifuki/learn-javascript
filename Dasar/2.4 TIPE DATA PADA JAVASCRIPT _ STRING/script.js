//String
//Escape (\0, \', \", \\, \n, \t, \b, \uxxxx)

//NULL character
var text = "Ayo \0\0\0";
console.log(`NULL = ${text}`);
// \" and \'
text = "\"Gerakan Pungut Sampah\" dilakukan pada hari Jum\'at";
console.log(`" and ' = ${text}`);
//backslash(\\)
text = "Aku backslash \\";
console.log(`backslash = ${text}`);
//new line(\n)
text = "lorem ipsum dolor, \nbaris baru ya";
console.log(`new line = ${text}`)
//tab \t
text = "nama\t: tab atau tabulasi\nnim\t\t: tab atau tabulasi";
console.log(`tabulasi \n${text}`);
//backspace \b
text = "lorem ipsum doler amit\bsit";
console.log(`backspace : ${text}`);
//unicode
text = "\u00A9 Aozora";
console.log(`unicode copyright : ${text}`);

//Concatenation
text = "Aozora"
var text2 = "Umeko";
var result = text.concat(text2);
console.log(`${text} + ${text2} is ${result}`);
//Comparison
text = "Aozora Umeko";
text2 = "aozora Umeko";
result = text === text2;
console.log(`${text} === ${text2} is ${result}`);
//prototype length
text = "Aozora Umeko";
console.log(`The character length of ${text} is ${text.length}`)