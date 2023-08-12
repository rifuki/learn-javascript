// Passenger Management

var passenger = new Array();
// passenger = ["Aozora", undefined, "Setsuna", undefined, undefined];
console.log(`${passenger.length} : ${passenger.join(", ")}`);
var addPassenger = function (passengerName, passenger) {
    // if the angkot is empty
    if (passenger.length === 0) {
        // add passeger at the beginning of the array
        passenger.push(passengerName);
        // return array contents and exit from function
        return passenger;
    }
    // else
    else {
        // browse all seats from scratch
        for (var i = 0; i < passenger.length; i++) {
            // if there is an empty seat
            if (passenger[i] === undefined) {
                // add passenger in that seat
                passenger[i] = passengerName;
                // return array contents and exit from function
                return passenger;
            }
            // if there is already the same name
            else if (passenger[i] === passengerName) {
                // show erorr message
                console.log(`${passengerName} is already in the angkot`);
                // return array contents and exit from function
                return passenger;
            }
            // if all seats are filled
            else if (i === (passenger.length - 1)) {
                // add passenger at the end of array
                passenger.push(passengerName);
                // return array contents and exit from function
                return passenger;
            }
        }
    }
}