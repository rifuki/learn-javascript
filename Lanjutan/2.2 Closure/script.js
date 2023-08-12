// function init(){
//     let namae = "Aozora";
//     function showName(){
//         console.log(namae);
//     }
//     return showName;
// }
// const callNamae = init();
// callNamae();


// function init(){
//     function showName(namae){
//         console.log(namae);
//     }
//     return showName;
// }
// const callNamae = init();
// callNamae("Ai");

// function init(){
//     return function (namae){
//         console.log(namae);
//     }
// }
// const callNamae = init();
// callNamae("Ai kedua");

// Function Factories
// function sayHello(time) {
//     return function (name) {
//         console.log(`Hello ${name}, Good ${time} have a nice day!`);
//     }
// }
// let goodMorning = sayHello("Morning");
// let goodAfternoon = sayHello("Afternoon");
// let goodEvening = sayHello("Evening");
// let goodNight = sayHello("Night");
// goodMorning("Aozora");
// goodAfternoon("Setsuna");
// goodEvening("Asaka");
// goodNight("Sayaka");
// console.dir(goodMorning);


// let counter = 0;
// let add = function () {
//     return ++counter;
// }
// console.log(add());


// let add = function(){
//     let counter = 0;
//     return function(){
//         return ++counter;
//     }
// }
// let tambah = add();
// console.log(tambah());


// immediately invoked function
let add = (function(){
    let counter = 0;
    return function(){
        return ++counter;
    }
})();