// function createElement(type, text, color){
//     const element = document.createElement(type);
//     element.textContent = text;
//     element.style.color = color;
//     document.body.appendChild(element);
//     return {
//         element: element,
//         setText(text){
//             element.textContent = text
//         },
//         setColor(color){
//             element.style.color = color
//         } 
//     }
// }

// const me = {
//     name: "rifuki",
//     talk(){
//         return `hello i'm ${this.name}`
//     }
// }

// const yuki = {
//     name: "yuki",
//     talk(){
//         return `hello i'm ${this.name}`
//     }
// }

// function personFactory(name){
//     const object = {
//         talk(){
//             return `hello i'm ${name}`
//         }
//     }
//     return object;
// }

function createElement(type, text, color){
    const el = document.createElement(type);
    el.textContent = text;
    el.style.color = color;
    document.body.appendChild(el);
    return {
        el: el,
        setText(text){
            el.textContent = text
        },
        setColor(color){
            el.style.color = color
        } 
    }
}