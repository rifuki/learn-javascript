function Student(name) {
    this.name = name;
    this.energy = Math.round(Math.random() * 10 + 1);
}
Student.prototype.eat = function (portion) {
    this.energy += portion;
    console.log(`Hello ${this.name}, Enjoy your meal!`);
    return this.energy;
}
Student.prototype.doUnthinkingly = function (hours) {
    this.energy -= hours;
    console.log(`Hello ${this.name}, Have a nice play`);
    return this.energy;
}
Student.prototype.sleep = function (hours) {
    this.energy *= 2;
    console.log(`Hello ${this.name}, Oyasumi!`);
    return this.energy;
}

const student1 = new Student("Aozora Umeko");
console.log(student1);

class StudentWithClass {
    constructor(name) {
        this.name = name;
        this.energy = Math.round(Math.random() * 10 + 1);
    }
    eat(portion) {
        this.energy += portion;
        console.log(`Hello ${this.name}, Enjoy your meal!`);
        this.energy;
    }
    doUnthinkingly(hours) {
        this.energy -= hours;
        console.log(`Hello ${this.name}, Have a nice play!`);
        return this.energy;
    }
    sleep() {
        this.energy *= 2;
        console.log(`Hello ${this.name}, Oyasumi!`);
        return this.energy;
    }
}

const student2 = new StudentWithClass("Setsuna Rika");
console.log(student2);