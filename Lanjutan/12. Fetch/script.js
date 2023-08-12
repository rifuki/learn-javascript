// let API = "http://www.omdbapi.com/?apikey=fbb8a87&s=Avengers";

// window.addEventListener("load", (e) => {
//   loadContent(API);
// });

// // $("#search-button").on("change", function () {
// $("#search-button").on("click", function () {
//   let inputKeyword =
//     "http://www.omdbapi.com/?apikey=fbb8a87&s=" + $("#input-keyword").val();
//   loadContent(inputKeyword);
// });

// function loadContent(data) {
//   $.ajax({
//     url: data,
//     success: (results) => {
//       const movies = results.Search;
//       let cards = ``;
//       movies.forEach((movie) => {
//         cards += showCards(movie);
//       });
//       $("#movie-container").html(cards);

//       // When Button Clicked
//       $(".modal-detail-button").on("click", function () {
//         $.ajax({
//           url:
//             "http://www.omdbapi.com/?apikey=fbb8a87&i=" +
//             $(this).data("imdbid"),
//           success: (m) => {
//             const movieDetail = showMovieDetail(m);
//             $(".modal-body").html(movieDetail);
//           },
//           error: (e) => console.log(e.responseText),
//         });
//       });
//       // End When Button Clicked
//     },
//     error: (e) => console.log(e.responseText),
//   });
// }

// // // FETCH
const searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector("#input-keyword");
  fetch("http://www.omdbapi.com/?apikey=fbb8a87&s=" + inputKeyword.value)
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      let cards = ``;
      movies.forEach((movie) => {
        cards += showCards(movie);
      });
      const movieContainer = document.querySelector("#movie-container");
      movieContainer.innerHTML = cards;

      // Ketika tombol detail diklik
      const modalDetailButton = document.querySelectorAll(
        ".modal-detail-button"
      );
      modalDetailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          const imdbid = this.dataset.imdbid;
          fetch("http://www.omdbapi.com/?apikey=fbb8a87&i=" + imdbid)
            .then((response) => response.json())
            .then((m) => {
              const movieDetail = showMovieDetail(m);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = movieDetail;
            })
            .catch((response) => console.log(response));
        });
      });
    })
    .catch((response) => console.log(response));
});

function showCards(movie) {
  return `<div class="col-md-3 g-5">
        <div class="card">
          <img src="${movie.Poster}" class="card-img-top" alt="movie" />
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="text-muted">${movie.Year}</p>
            <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
            data-bs-target="#exampleModal" data-imdbid="${movie.imdbID}">Show Details.</a>
          </div>
        </div>
      </div>`;
}
function showMovieDetail(m) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid" />
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                  <li class="list-group-item">
                    <strong>Director : </strong> ${m.Director}
                  </li>
                  <li class="list-group-item">
                    <strong>Actors : </strong> ${m.Actors}
                  </li>
                  <li class="list-group-item">
                    <strong>Writer : </strong> ${m.Writer}
                  </li>
                  <li class="list-group-item">
                    <strong>Plot : </strong> <br />
                    ${m.Plot}
                  </li>
                </ul>
              </div>
            </div>
          </div>`;
}
