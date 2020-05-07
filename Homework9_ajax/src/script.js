

$('#btn').on('click', () => {
    let inputMovie = document.getElementById('search-field').value;
    console.log(inputMovie);

    $.ajax('http://www.omdbapi.com/?i=tt3896198&apikey=5958a2e2&t=' + inputMovie).done(function(movie) {
    console.log(movie);

    //insert if movie.Response == true see below
    // if movie.Response == false Write text: Movie not found
    let movieInfo = $('<div></div>');
    movieInfo.append(`
    <h3>Title: ${movie.Title}</h3>
    <p>Story: ${movie.Plot}</p>
    <p>Actors: ${movie.Actors}</p>
    <p>Director: ${movie.Director}</p>
    <p>Genre: ${movie.Genre}</p>
    <p>Year: ${movie.Year}</p>
    <p>Runtime: ${movie.Runtime}</p>
    <p>Language: ${movie.Language}</p>
    <p>Awards: ${movie.Awards}</p>
    <p>IMDB Rating: ${movie.imdbRating}</p>
    `)
    $('.movie-section__info').append(movieInfo);
    })
})
