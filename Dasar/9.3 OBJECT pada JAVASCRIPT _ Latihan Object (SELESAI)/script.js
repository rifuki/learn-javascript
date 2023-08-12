//Exercise

// create an Angkot object  
function Angkot(driver, route, passenger, cash) {
    this.driver = driver;
    this.route = route;
    this.passenger = passenger;
    this.cash = cash;

    this.passengerBoarding = function (passengerName) {
        this.passenger.push(passengerName);
        return this.passenger;
    }

    this.passengerGetOff = function (passengerName, pay) {
        if (this.passenger.length === 0) {
            console.log("Angkot still empty");
            return false;
        }

        for (var i = 0; i < this.passenger.length; i++) {
            if (this.passenger[i] == passengerName) {
                this.passenger[i] = undefined;
                this.cash += pay;
                return this.passenger;
            }
        }
    }

}

var Angkot1 = new Angkot("Aozora Umeko", ["Cicaheum", "Cibiru"], [], 0);
console.log(Angkot1);

var Angkot2 = new Angkot("Setsuna Rika", ["Antapani", "Ciroyom"], [], 0);
console.log(Angkot2);