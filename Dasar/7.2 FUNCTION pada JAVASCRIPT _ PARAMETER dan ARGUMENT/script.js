//Parameter
function addition(a, b) {
    return a + b;
}

function multiplication(a, b){
    return a * b;
}

function testArguments(){
    result = 0;
    for(var i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

//Argument

// var a = 30;
// var b = 5;
// var a = parseInt(prompt("Enter value 1 : "));
// var b = parseInt(prompt("Enter value 2 : "));
// var result = addition(a, b) ;

// var result = multiplication(addition(1, 2), addition(1, 2));

// var result = addition(1);

console.log(testArguments(10, 10, 10, 10, 20, 20, 40));

// console.log(result);