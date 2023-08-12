//Swicth Condition
// var number = parseInt(prompt("Enter number : "));

// if (number === 1) {
//     alert("You enter number 1");
// }
// else if (number === 2) {
//     alert("You enter number 2");
// }
// else if (number === 3) {
//     alert("You enter number");
// }
// else {
//     alert("The number you entered is wrong");
// }

// switch (number) {
//     case 1:
//         alert("You entered number 1");
//         break;
//     case 2:
//         alert("You entered number 2");
//         break;
//     case 3:
//         alert("You entered number 3");
//         break;
//     default:
//         alert("The number you entered is wrong");
//         break;
// }

var item = prompt("Enter the name of the food / drink : \n(ex: rice, meat, milk, hamburger, softdrink)");

// switch (item) {
//     case "rice":
//         alert("Healthy food or drink");
//         break;
//     case "meat":
//         alert("Healthy food or drink");
//         break;
//     case "milk":
//         alert("Healthy food or drink")
//         break;
//     case "hamburger":
//         alert("Unhealthy food or drink");
//         break;
//     case "softdrink":
//         alert("Unhealthy food or drink");
//         break;
//     default:
//         alert("You entered the name of the wrong food / drink");
//         break;
//}

switch (item) {
    case "rice":
    case "meat":
    case "milk":
        alert("Healthy food or drink")
        break;
    case "hamburger":
    case "softdrink":
        alert("Unhealthy food or drink");
        break;
    default:
        alert("You entered the name of the wrong food / drink");
}