// api https://www.omdbapi.com/?i=tt3896198&apikey=f97dee03
//

const moviesListELem = document.querySelector(".movies__row");
const moviesSearchElem = document.querySelector(".searchResult");
const id = localStorage.getItem("id");

let movies;
let movie;

async function onSearchChange(event) {
  const id = event.target.value;
  renderMovies(id);
  moviesSearchElem.innerHTML = id;
}

const moviesWrapper = document.querySelector(".movies");

  moviesWrapper.classList.add("movies__loading");

  function renderMovies(filter) {
    if (filter === "NEWEST_TO_OLDEST") {
      return movies.sort((a, b) => (b.Year || b.year) - (a.Year || a.year));
    } else if (filter === "OLDEST_TO_NEWEST") {
      return movies.sort((a, b) => (a.Year || a.year) - (b.Year || b.year));
    }
  }

function filterMovies(event) {
  const filter = event.target.value;
  const sortedMovies = renderMovies(filter);
  moviesListELem.innerHTML = sortedMovies.map((movie) => moviesHTML(movie)).join("");
  console.log(sortedMovies)
}

async function renderMovies(id) {
    moviesWrapper.classList.add("movies__loading"); // add loading class
    let moviesResponse;
    if (id) {
    moviesResponse = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=f97dee03&s=${id}`
  )};
  const moviesData = await moviesResponse.json();
  if (moviesData && Array.isArray(moviesData.Search)) {
    movies = moviesData.Search;
    moviesListELem.innerHTML = movies
      .map((movie) => moviesHTML(movie))
      .join("");
    moviesWrapper.classList.remove("movies__loading"); // remove loading class
  }
}

function moviesHTML(movie) {
  return `
        <div class="movie">
            <figure class="movie__img--wrapper">
                <img src="${movie.Poster}" class="movie__img" alt="">
            </figure>
            <div class="movie__title">
            ${movie.Title}
            </div>
        </div>
    </div>
    `;
}

renderMovies(id)
