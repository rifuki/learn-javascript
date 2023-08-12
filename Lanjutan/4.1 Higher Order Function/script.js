doTheTask("Web Programming", finish);

// Higher Order Function
function doTheTask(course, finish) {
  console.log(`Start working on ${course}`);
  return finish();
}
// Callback
function finish() {
  console.log(`Finished doing the task`);
}

// let total = 1;
// count = 1;
// while (count <= 5) {
//   total *= count;
//   count += 1;
// }

// console.log(total);

function repeat(n, action){
    for(let i = 0; i < n; i++){
        action(i);
    }
}

repeat(10, console.log);