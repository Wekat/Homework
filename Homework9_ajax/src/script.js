

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
