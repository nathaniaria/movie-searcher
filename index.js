// api https://www.omdbapi.com/?i=tt3896198&apikey=f97dee03
// 

const moviesListELem = document.querySelector(".movies__row")

async function onSearchChange(event) {
    const id = event.target.value
    renderMovies(id)
}

async function renderMovies(id) {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=f97dee03&s=${id}`)
    const moviesData = await movies.json()
    moviesListELem.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("")

}




async function main(id) {
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

renderMovies()
main()

