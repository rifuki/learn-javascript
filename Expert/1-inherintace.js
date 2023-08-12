/** Person One */
const PersonOne = {
    name: "Person One",
    talk() {
        return "talking";
    },
};

// inheritance
const orang1 = Object.create(PersonOne);
const orang2 = new Object();
Object.setPrototypeOf(orang2, PersonOne);
const orang3 = new Object();
orang3.__proto__ = PersonOne;
/** End Person One */

/** Person Two */
function PersonTwo(name) {
    this.name = name;
}
PersonTwo.prototype.talk = () => "talking";

// instance
const orang4 = new PersonTwo("Person Two");
// inheritance
const orang5 = Object.create(orang4);
const orang6 = new Object();
Object.setPrototypeOf(orang5, orang4);
const orang7 = new Object();
orang7.__proto__ = orang4;
/** Person Two */

/** Person Three */
class PersonThree {
    constructor(name) {
        this.name = name;
    }
    talk() {
        return "talking";
    }
}

const orang8 = new PersonThree("Person Three");
/** End Person Three */

/** Person Four */
class PersonFour extends PersonThree {
    constructor(name, power) {
        super(name);
        this.power = power;
    }
    eat() {
        return "eating";
    }
}
/** End Person Four */

const orang9 = new PersonFour("Person Four", 100);
