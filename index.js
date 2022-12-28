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

function renderMovies(filter) {
  moviesWrapper.classList.add("movies__loading");

  if (filter === "NEWEST_TO_OLDEST") {
    movies.sort((a, b) => (b.Year || b.year) - (a.Year || a.year));
    moviesListELem.innerHTML = movies
      .map((movie) => moviesHTML(movie))
      .join("");
  } else if (filter === "OLDEST_TO_NEWEST") {
    movies.sort((a, b) => (a.Year || a.year) - (b.Year || b.year));
    moviesListELem.innerHTML = movies
      .map((movie) => moviesHTML(movie))
      .join("");
  }
}

function filterMovies(event) {
  renderMovies(event.target.value);
}

async function renderMovies(id) {
  const moviesResponse = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=f97dee03&s=${id}`
  );
  const moviesData = await moviesResponse.json();
  if (moviesData && Array.isArray(moviesData.Search)) {
    movies = moviesData.Search;
    moviesListELem.innerHTML = movies
      .map((movie) => moviesHTML(movie))
      .join("");
    console.log(moviesData);

    moviesWrapper.classList.remove("movies__loading");
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

renderMovies(id);
