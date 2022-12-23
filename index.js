// api https://www.omdbapi.com/?i=tt3896198&apikey=f97dee03
// 

const moviesListELem = document.querySelector(".movies__row")
const moviesSearchElem = document.querySelector(".searchResult")
const id = localStorage.getItem(".searchResult")



async function onSearchChange(event) {
    const id = event.target.value
    renderMovies(id)
    moviesSearchElem.innerHTML = id
}

const moviesWrapper = document.querySelector('.movieSpin');


function renderMovies(filter) {
  if (filter === 'NEWEST_TO_OLDEST') {
    movies.sort((a, b) => a.Year - b.Year);
  } else if (filter === 'OLDEST_TO_NEWEST') {
    movies.sort((a, b) => b.Year - a.Year);
  }

}

function filterMovies(event) {
  renderMovies(event.target.value);
}


async function renderMovies(id) {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=f97dee03&s=${id}`)
    const moviesData = await movies.json()
    moviesListELem.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("")
    console.log(moviesData)
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
    `
}
renderMovies(id)



