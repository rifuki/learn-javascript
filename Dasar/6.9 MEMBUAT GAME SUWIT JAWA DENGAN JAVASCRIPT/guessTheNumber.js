//Generate random number (1-10);
var number = Math.floor(Math.random() * 10);
for (var i = 0; i < 50; i++) {
    console.log(number);
}

var guess = 3;

while (guess !== 0 && player !== number) {
    //Catch user guess
    var player = parseInt(prompt(`You still have ${guess} more chances \nEnter number : (0-10) `));
    //Determine the rules
    if (player >= 0 && player <= 10 && guess) {
        if (player === number) {
            alert(`Congratulations!! You guessed it right in ${guess} guess\n The number you're looking for is ${number}`);
        }
        else if (player <= number) {
            guess--;
            alert(`Oops sorry!! try a greater number`);
        }
        else {
            guess--;
            alert(`Oops sorry!! try a smaller number`);
        }
    }
    else {
        alert(`The entered number does not match!`);
    }
}

if (guess === 0) {
    alert(`You're Lose!`);
}