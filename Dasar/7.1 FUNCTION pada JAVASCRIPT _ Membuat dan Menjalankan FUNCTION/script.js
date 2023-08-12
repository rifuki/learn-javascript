//Function 
function calculateVolumeTheCube(cubeA, cubeB) {
    var volumeA, volumeB, total;
    volumeA = cubeA ** 3;
    volumeB = cubeB ** 3;
    total = volumeA + volumeB;
    return total;
}

var result = calculateVolumeTheCube(8, 3);
console.log(result);
var result = calculateVolumeTheCube(2, 2);
console.log(result);
var result = calculateVolumeTheCube(5, 4);
console.log(result);
var result = calculateVolumeTheCube(1, 8);
console.log(result);
