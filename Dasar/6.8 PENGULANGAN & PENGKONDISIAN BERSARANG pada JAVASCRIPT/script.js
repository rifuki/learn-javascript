var string = "";
for (var i = 0; i < 5; i++) {
    for (var j = 0; j <= i; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);

// var string = "";
// for(var i = 0; i < 5; i++){
//     for(var j = 5; j >= i; j--){
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

var string = "";
for (var i = 5; i > 0; i--){
    for(var j = 0; j < i; j++){
        string += "*";
    }
    string += "\n";
}

console.log(string);