// // Keyword This

// var a = 10;
// console.log(this);
// console.log(window);
// console.log(this === window);
// console.log(this.a);
// console.log(window.a);

// way 1 - function declaration
function hello() {
    console.log(this);
    console.log("Hello from Function Declarative");
}

window.hello();
this.hello();

// way 2 - object literal = return specific object
var obj = new Object({ a: 10, name: "Aozora" });
obj.hello = function () {
    console.log(this);
    console.log("Hello from Object Literal");
}

obj.hello();

// way 3 - constructor
function Hello(name){
    this.name = name
    console.log(this);
    console.log("Hello from Object Constructor");
}

var obj1 = new Hello("Aozora");
var obj2 = new Hello("Setsuna");