// Rest Parameter

// function myFunc(...args) {
//     // return `a = ${a}, b = ${b}, args = ${args}`;
//     return args
// }

// function myFunc() {
//     // return `a = ${a}, b = ${b}, args = ${args}`;
//     // return Array.from(arguments);
//     return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function sum(...number){
//     // let total = 0;
//     // for(const n of number){
//     //     total += n;
//     // }
//     // return total;
//     return number.reduce((a, b) => a+b, 0);
// }
// console.log(sum(1, 2, 3, 4, 5))

// // Array Destructuring
// const group1 = ["Aozora", "Rifuki", "Setsuna", "Ahane", "Miku"];
// const [chief, viceChief, ...member] = group1;
// console.log(chief);
// console.log(viceChief);
// console.log(member);

// // Object Destructuring
// const team = {
//     pm: "Aozora",
//     frontEnd1: "Setsuna",
//     frontEnd2: "Akitomi",
//     backEnd: "Rifuki",
//     ux: "Sayaka",
//     devOps: "Miku" 
// }

// const {pm, ...myTeam} = team;
// console.log(pm);
// console.log(myTeam);

// Filtering
function filterBy(type, ...args){
    return args.filter(v => typeof(v) === type);
}

console.log(filterBy("number", 1,2, "Aozora", false, 10, true, "Setsuna"));