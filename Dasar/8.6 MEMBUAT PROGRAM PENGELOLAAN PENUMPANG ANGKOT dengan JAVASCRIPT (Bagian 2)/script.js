var removePassenger = function (passengerName, passenger) {
    // if the angkot is empty
    if (passenger.length === 0) {
        // display a message that the angkot is empty, no passengers get off
        console.log(`The angkot still empty`);
        // return the contents of the array and exit from the function
        return passenger;
    }
    // else
    else {
        // browser all seats from stratch
        for (var i = 0; i < passenger.length; i++) {
            // if the passenger's name matches
            if (passenger[i] === passengerName) {
                // remove passenger by changing its name to undefined
                passenger[i] = undefined;
                // return the content of the array and exit from the function
                return passenger;
            }
            // if there is no suitable name
            else if (i === passenger.length - 1) {
                // show error message
                console.log(`${passengerName} is not in the angkot`);
                // return the content of the array and exit from the function
                return passenger;
            }
        }
    }
}