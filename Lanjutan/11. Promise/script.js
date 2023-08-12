// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=fbb8a87&s=Avengers",
//     success: (movies) => console.log(movies),
//     error: (e) => console.log(e)
// })

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.status === 200){
//         if(xhr.readyState === 4){
//             console.log(JSON.parse(xhr.response));
//         }
//     } else{
//         console.log(xhr.responseText);
//     }
// }
// xhr.open("GET", "http://www.omdbapi.com/?apikey=fbb8a87&s=Avengers");
// xhr.send();

// fetch("http://www.omdbapi.com/?apikey=fbb8a87&s=Avengers")
// .then(response => response.json())
// .then(response => console.log(response));

// // PROMISE

// example 1
// let ditepati = false;
// const janji1 = new Promise((resolve, rejected) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati");
//   } else {
//     rejected("Ingkar janji");
//   }
// });
// console.log(janji1);
// janji1.then(response => console.log("OK! : " + response))
// .catch(response => console.log("Not Okay : " + response));

// example 2
// let ditepati = true;
// const janji2 = new Promise((resolve, rejected) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       rejected("Tidak ditepati setelah beberapa waktu!");
//     }, 2000);
//   }
// });
// console.log("Mulai");
// // console.log(janji2.then(() => console.log(janji2)));
// // janji2
// //   .finally(() => console.log("Selesai Menunggu"))
// //   .then((response) => console.log("OK! : " + response))
// //   .catch((response) => console.log("NOT OK! : " + response));
// console.log("Selesai");

// // Promise.all()
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Marvelin",
        pemerean: "Sese",
      },
    ]);
  }, 1000);
});
const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bandung",
        temp: 26,
        kondisi: "Cerah Berawan",
      },
    ]);
  }, 500);
});
// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));
Promise.all([film, cuaca])
// .then(response => console.log(response));
.then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
})