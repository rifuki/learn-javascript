var again = true;
while (again) {
    //Catch user choice
    var player = prompt("select: 'elephant', 'ant', 'person'", "ant");

    //Catch computer choice
    //Generate random numbers
    var computer = Math.random();
    if (computer < 0.34) {
        computer = "elephant";
    }
    else if (computer >= 0.34 && computer < 0.67) {
        computer = "person";
    }
    else {
        computer = "ant";
    }
    console.log(computer);

    var result = "";
    //Determine the rules
    if (player === computer) {
        result = "DRAW";
    }

    else if (player === "elephant") {
        result = (computer === "person" ? "WIN" : "LOSE");
    }
    else if (player === "person") {
        result = (computer === "elephant" ? "LOSE" : "WIN");
    }
    else if (player === "ant") {
        result = (computer === "person" ? "LOSE" : "WIN");
    }
    else {
        result = "Entered the wrong choice";
    }
    //Show Result
    alert(`Player select ${player} and Computer select ${computer}, then your result is ${result}`);
    again = confirm("Again?");
}

alert("Bye-bye ^w^");