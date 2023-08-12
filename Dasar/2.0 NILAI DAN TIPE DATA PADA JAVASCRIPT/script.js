//Data Types (string, number, boolean, function, object, undefined)

var name = "Aozora";
console.log(`${name} is ${typeof(name)}`);

var energy = 20;
console.log(`${energy} is ${typeof(counter)}`);

var alive = true;
console.log(`${alive} is ${typeof(alive)}`);

var eat = function(portion) {
    energy += portion;
    console.log(`Energy now : ${energy}`);
}
console.log(`${eat} is ${typeof(eat)}`);

var skill = {
    Overhaul: "a quirk gants user the ability to disassemble and reassemble matter with the hands",
    TheWorld: "the ability to stop time"
}
console.log(`${skill} is ${typeof(skill)}`);

var notfound;
console.log(`${notfound} is ${typeof(notfound)}`);