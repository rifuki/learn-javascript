//Separate method to an object
const methodStudent = {
    eat: function (portion) {
        this.energy += portion;
        console.log(`Hello ${this.name}, Enjoy your meal!`);
        return this.energy;
    },
    doUnthinkingly: function (hours) {
        this.energy -= hours;
        console.log(`Hello ${this.name}, Have a nice play!`);
        return this.energy;
    },
    sleep: function (hours) {
        this.energy *= hours;
        console.log(`Hello ${this.name}, Have a good night's sleep`);
        return this.energy;
    }
}

function createStudent(name) {
    const student = new Object();
    student.name = name;
    student.energy = Math.round(Math.random() * 10 + 1);
    student.eat = methodStudent.eat;
    student.doUnthinkingly = methodStudent.doUnthinkingly;
    student.sleep = methodStudent.sleep;
    return student;
}

const student1 = createStudent("Aozora Umeko");
console.log(student1);

function Student(name) {
    this.name = name;
    this.energy = Math.round(Math.random() * 10 + 1);
    this.eat = methodStudent.eat;
    this.doUnthinkingly = methodStudent.doUnthinkingly;
    this.sleep = methodStudent.sleep;
}

const student2 = new Student("Setsuna Rika");
console.log(student2);

function createObjectStudent(name) {
    let student = new Object.create(methodStudent);
    student.name = name;
    student.energy = Math.round(Math.random * 10 + 1);
    return student;
}

const student3 = new Student("Ahane Sayaka");
console.log(student3);