// function Person(name){
//     this.name = name;
//     this.talk = () => {
//         return `Hi, my name is ${this.name}`;
//     }
// }

// Person.prototype.fly = () => `I'm flying`;

function createSuperElement(type, content){
    this.el = document.createElement(type);
    this.el.textContent = content;
    document.body.appendChild(this.el);
    this.el.addEventListener("click", () => {
        console.log(this.el);
        alert(this.el.textContent);
    })
}

const array = ["rifuki", "aozora", "setsuna"];

const myElements = array.map((item) => {
    return new createSuperElement("p", item);
})