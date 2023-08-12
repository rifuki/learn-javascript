/** Async Await  */

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    }, 1000);
  });
}

const result1 = getData();