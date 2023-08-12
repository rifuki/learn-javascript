/**
 * Async Examples :
 * 1. Data Fetching
 * 2. Calling Backend APIs
 * 3. Loading Files
 * 4. Timer & Interval
 */

// let pizza;
//  function orderPizza() {
//   console.log("orderPizza");
//    setTimeout(() => {
//     pizza = "Here is your pizza";
//     console.log(`${pizza} is ready`);
//   }, 2000);
//    console.log(`Pizza was created`);
// }
// orderPizza();
// console.log("Call Qoli");
// console.log(`eat ${pizza}`);

let pizza = "";
function orderPizza(callback) {
  console.log("order pizza");
  setTimeout(() => {
    pizza = "Pizza Macaroni";
    console.log(`${pizza} is ready`);
    callback(pizza);
  }, 2000);
}
function pizzaReady(pizza) {
  setTimeout(() => {
    console.log(`eat ${pizza}`);
  }, 1000);
}
orderPizza(pizzaReady);
console.log("call yuki!!!");
document.getElementById("size-12").addEventListener("click", callback);
function callback() {
  document.body.style.fontSize = "50px";
}

function thing1(callback) {
  // call pizza shop
  console.log("Something 1");
  callback();
  console.log("End Something 1");
}
function thing2(callback) {
  // order the pizza
  console.log("Something 2");
  callback();
  console.log("End Something 2");
}
function thing3(callback) {
  // eat the pizza
  console.log("Something 3");
  callback();
  console.log("End Something 3");
}

thing1(() => {
  thing2(() => {
    thing3(() => {
      console.log("all done");
    });
  });
});
