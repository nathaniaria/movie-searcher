// api https://www.omdbapi.com/?i=tt3896198&apikey=f97dee03
// 

const moviesListELem = document.querySelector(".movies--movies")

async function onSearchChange(event) {
    const id = event.target.value
    renderMovies(id)
}




async function main(id) {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=f97dee03&s=fast`)
    const moviesData = await movies.json()
    moviesListELem.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("")

    console.log(moviesData)
}


main()


function moviesHTML(movie) {
    return `
    <div class="movies--movies">
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




/* <div class="movies__container">
    <div class="movies-list">
        <div class="movie">
            <img src="${movie.Poster}" class="movie__img" alt="">
            <h3 class="movie__title">${movie.Title}</h3>
        </div>
    </div
</div> */