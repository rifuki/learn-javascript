/**
 * Arrow Function Benefits :
 * 1. aesthetics
 * 2. binding with this
 */

/**
 * Dont use arrow function :
 * 1. object methods
 * 2. protoypes
 * 3. as function constructor
 * 4. event handlers 
 */

/**
 * use arrow function :
 * 1. inside callback
 */

const sayHelloExp = function () {
  console.log(arguments);
};
function sayHaiExp(...props) {
  console.log(props);
}

/** arrow function tidak dapat menangkap arguments */
/** arrow function tidak dapat dijadikan fungsi constructor */
const sayHelloArr = () => {
  console.log(arguments);
};
const sayHaiArr = (...props) => {
  console.log(props);
};

// const me = {
//     name: "rifuki",
//     power: 1,
//     talk() {
//         setInterval( function(){
//             console.log(this.name + " " + this.power++);
//         }.bind(this), 1000);
//     }
// }

// me.talk();

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.talk = function(){
//     return this;
// }

// Person.prototype.arrowTalk = () => {
//     return this;
// }

// Person.prototype.someOtherFunction = this;

// document.body.addEventListener("click", () => {
//     console.log(this);
// })

function outer(callback, obj){
    callback.call(obj);
}

function inner(){
    console.log(this);
}

outer(inner, {name: "rifuki"});