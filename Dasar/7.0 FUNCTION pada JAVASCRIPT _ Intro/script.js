//Function Declaration
function sumOfTwoNumbers(a, b) {
    var total;
    total = a + b;
    
    return total;
}

//Function Expression
var sumOfTwoNumbers = function (a, b) {
    var total;
    total = a + b;

    return total;
}

console.log(sumOfTwoNumbers);
console.log(sumOfTwoNumbers(3, 10));