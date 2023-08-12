//Looping
alert("start");
for (var i = 0; i < 5; i++) {
    alert("hello " + ++i);
}
alert("finish");

//Conditional
var number = prompt("Enter number : ");
if(number % 2 === 0){
    alert(number + " is even number");
}
else{
    alert(number + " is odd number");
}