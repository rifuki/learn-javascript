// Array Manipulation 4

// 9. filter
var number = [2, 8, 4, 3, 1, 0, 5, 6, 7, 10];
var numberFilter = number.filter(function (x) {
    return x > 5;
})
console.log(numberFilter.join("-"));

// 10. find
var numberFind = number.find(function (x) {
    return x > 5;
})
console.log(numberFind);