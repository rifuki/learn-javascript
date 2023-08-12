// How to create object in Javascript

// 1. Object Literal
let student1 = {
    name: "Muhammad Rifki",
    energy: 25,
    eat: function (portion) {
        this.energy = this.energy + portion;
        console.log(`Hello ${this.name}, Enjoy your meal!`);
        return this.energy;
    }
}
let student2 = {
    name: "Norio Rifuki",
    energy: 10,
    eat: function (portion) {
        this.energy += portion;
        console.log(`Hello ${this.name}, Enjoy your meal!`);
        return this.energy;
    }
}

// 2. Function Declaration
function createStudent(name, energy) {
    let student = new Object();
    student.name = name;
    student.energy = energy;
    student.eat = function (portion) {
        this.energy += portion;
        console.log(`Hello ${this.name}, Enjoy your meal!`);
        return this.energy;
    }
    student.doUnthinkingly = function (hours) {
        this.energy -= hours;
        console.log(`Hello ${this.name}, Have a nice play!`);
        return this.energy;
    }
    return student;
}

let student3 = createStudent("Asaka Erize", 5);
let student4 = createStudent("Ahane Sayaka", 23);

// Constructor Function
function Student(name, energy) {
    this.name = name;
    this.energy = energy;
    this.eat = function (portion) {
        this.energy += portion;
        console.log(`Hello ${this.name}, Enjoy your meal!`);
        return this.energy;
    }
    this.doUnthinkingly = (hours) => {
        this.energy -= hours;
        console.log(`Hello ${this.name}, Have a nice play!`);
        return this.energy;
    }
}

let student5 = new Student("Akitomi Ayaka", 10);
let student6 = new Student("Aomori Fumie", 15);