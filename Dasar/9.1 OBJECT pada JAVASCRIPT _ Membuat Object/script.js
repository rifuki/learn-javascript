// Create Object

// Object Literal
var student1 = {
    name: "Muhammad Rifki",
    nim: "191011401905",
    email: "mahomarifuki@gmail.com",
    departement: "Informatics Engineering",
};

var student2 = {
    name: "Aozora Umeko",
    nim: "120291949102",
    email: "aozoraumeko@gmail.com",
    departement: "Graphics Design"
}

// Function Declaration
function createStudentObject(name, nim, email, departement) {
    var student = new Object();
    student.name = name;
    student.nim = nim;
    student.email = email;
    student.departement = departement;

    return student;
}

var student3 = createStudentObject("Setsuna Rika", "183488142219", "setsunarika@gmail.com", "Etnomusiclogi");
var student4 = createStudentObject("Akitomi Ayaka", "320109234101", "akitomiayaka@gmail.com", "Communication Studies");

// Constructor
function Student(name, nim, email, departement) {
    this.name = name;
    this.nim = nim;
    this.email = email;
    this.departement = departement;
}

var student5 = new Student("Asaka Erize", "239102304419", "asakaerize@gmail.com", "Puppet Arts");