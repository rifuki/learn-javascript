// function createPerson(name) {
//     return {
//         name: name,
//         talk() {
//             return `Hi, my name is ${this.name}!`;
//         }
//     }
// }

// const myCoolProto = {
//     talk(){
//         return `Hi, my name is ${this.name}!`;
//     }
// }

// function createPerson(name){
//     return Object.create(myCoolProto, {
//         name: {
//             value: name
//         }
//     })
// }

// const myCoolProto = {
//     smile(){
//         return `${this.name} 👍👍👍`;
//     }
// }

// function createPerson(name){
//     return Object.create(myCoolProto, {
//         name: {
//             value: name
//         }
//     })
// }

// function Person(name){
//     this.name = name;
// }

// function Person(name){
//     this.name = name;
// }

// Person.prototype.talk = function(){
//     return `Ciao, io sono ${this.name}!`;
// }

// const aozora = new Person("aozora");