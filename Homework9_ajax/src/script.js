

$('#btn').on('click', () => {
    let inputMovie = document.getElementById('search-field').value; //getting the input value from search field
    console.log(inputMovie);

    

    $.ajax('http://www.omdbapi.com/?i=tt3896198&apikey=5958a2e2&t=' + inputMovie)
    .done(function(movie) {
        console.log(movie);
        $('.movie-section__info').empty(); //empty the div so that it is not filled up when new search is made
        $('.movie-section__poster').empty(); //empty the div so that it is not filled up when new search is made
        let movieSection = document.querySelector('.movie-section');
        console.log(movieSection);
        movieSection.classList.add('backdrop')
        

        if (movie.Response == 'True') { //movie exists in database
            let movieInfo = $('<div class="movie-info"></div>');
            movieInfo.append(`
            <h3>${movie.Title}</h3>
            <br>
            <p class="text plot">${movie.Plot}</p>
            <p class="text actors"><span class="info-heading">Actors</span>: ${movie.Actors}</p>
            <p class="text director"><span class="info-heading">Director</span>: ${movie.Director}</p>
            <p class="text genre"><span class="info-heading">Genre</span>: ${movie.Genre}</p>
            <p class="text year"><span class="info-heading">Year</span>: ${movie.Year}</p>
            <p class="text runtime"><span class="info-heading">Runtime</span>: ${movie.Runtime}</p>
            <p class="text language"><span class="info-heading">Language</span>: ${movie.Language}</p>
            <p class="text awards"><span class="info-heading">Awards</span>: ${movie.Awards}</p>
            <p class="text rating"><span class="info-heading">IMDB rating</span>: ${movie.imdbRating}</p>
            `)
            $('.movie-section__info').append(movieInfo);

            let poster = $('<div class="poster"></div>');
            poster.append(`<img class="poster__img" src="${movie.Poster}" alt=""></img>`)
            $('.movie-section__poster').append(poster);
            
        } else { //movie does not exist in database
            let movieInfo = $('<div></div>');
            movieInfo.append('<h2>Movie not found!</h2>')
            $('.movie-section__info').append(movieInfo);
        };
    })
})
