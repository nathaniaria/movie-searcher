// api https://www.omdbapi.com/?i=tt3896198&apikey=f97dee03
// 

const moviesListELem = document.querySelector(".movies__row")
const moviesSearchElem = document.querySelector(".searchResult")
const id = localStorage.getItem("id")
let movies;
let movie;
let filtermovies;


async function onSearchChange(event) {
    const id = event.target.value
    renderMovies(id)
    moviesSearchElem.innerHTML = id
}


function renderMovies(filter) {
  const moviesWrapper = document.querySelector('.movies')

  
  moviesWrapper.classList += ' movies__loading'

  setTimeout((
    moviesWrapper.classList.remove('movies__loading')
  ), 1000)

  if (filter === 'NEWEST_TO_OLDEST') {
    movies.sort((a, b) => (a.Year || a.year) - (b.Year || b.Year))
    moviesListELem.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("")
  } 
  else if (filter === 'OLDEST_TO_NEWEST') {
    movies.sort((a, b) => (b.Year || b.year) - (a.Year || a.Year))
    moviesListELem.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("")
  }

}

function filterMovies(event) {
  renderMovies(event.target.value);
}


async function renderMovies(id) {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=f97dee03&s=${id}`)
    const moviesData = await movies.json()
    if (moviesData && Array.isArray(moviesData.Search)) {
      moviesListELem.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("")
    console.log(moviesData)
}}


// moviesListELem.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("")

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
    `
}
renderMovies(id)


