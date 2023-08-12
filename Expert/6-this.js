/** Bind = oper object menjadi object this di function */
/** Call = ngebind sekaligus execute function */
/** Apply = ngebind, Call tetapi argument dipisah dalam bentuk array */

// function talk(){
//     return `I'm ${this.name}`
// }
// const me = {
//     name: "rifuki",
//     talk
// }
// const you = {
//     name: "aozora",
//     talk
// }

// function talk(){
//     return `I'm ${this.name}`;
// }
// const me = {
//     name: "rifuki"
// }
// const meTalk = talk.bind(me);
// const invokeImmediately = talk.bind(me)();
// const callImmediately = talk.call(me);

// function talk(lang, isPolite) {
//   if (!isPolite) {
//     if (lang === "jp") {
//       return `Kisammaaa! ${this.name}`;
//     }
//     return `${this.name}, What do you want?`;
//   }

//   if (lang === "jp") {
//     return `watashi ${this.name}`;
//   }
//   return `I'm ${this.name}`;
// }
// const me = {
//   name: "rifuki",
// };

function Person(name){
    this.name = name;
    this.talk = function(){
        console.log(this)
    }
    setTimeout(function(){
        console.log(this);
    }, 1000);
    setTimeout(() => {
        console.log(this);
    }, 2000)
    setInterval(function(){
        console.log(this)
    }.bind(this), 3000);
}

const me = new Person("rifuki");