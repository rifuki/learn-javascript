/** Closures adalah inner function yang memiliki akses terhadap variable yang dimiliki outer function */
/** Closures remember the outer function scope even after creation time */

function human(nameProp) {
  const name = nameProp;
  function sayHello() {
    console.log(`Hi, my name is ${name}`);
    return `Hi, my name is ${name}`;
  }
  function sayHowYouFeel() {
    console.log(`${name} is feeling good`);
  }
  return {
    sayHello,
    sayHowYouFeel,
  };
}

const mike = human("Mike");
const aozora = human("Aozora");

function clickHandler(size) {
    return function() {
        document.body.style.fontSize = `${size}px`
    }
}

document.getElementById("size-12").onclick = clickHandler(100);
