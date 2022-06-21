const form = document.querySelector('form');
const resultDiv = document.querySelector('.result');
const errorDiv = document.querySelector('.error');


// Class
class Movie {
    // constructor for this class
    constructor() {
        this.KEY = 'YOUR_KEY';
    }

    // Get movie data based on search query
    async getMovieData(movieName) {
        let response = await fetch(`http://www.omdbapi.com/?apikey=${this.KEY}&s=${movieName}`);
        let data = await response.json();
        return data.Search[0];
    }

    // Get full movie data when user clicks on the image
    async getFullData(imdbKey) {
        let response = await fetch(`http://www.omdbapi.com/?i=${imdbKey}&apikey=${this.KEY}`);
        let data = await response.json();
        
        localStorage.setItem('fullMovieData', JSON.stringify(data));
        window.location.href = '/movie.html';
    }

    // Show the result to the user
    showMovieData(movieData) {
        if (movieData.Poster === 'N/A') {
            const poster = 'https://via.placeholder.com/300';

            resultDiv.innerHTML = `
                <div>
                    <div class="image">
                        <a href="#" onClick="movieApp.getFullData('${movieData.imdbID}')"><img src="${poster}" alt="movie_img"></a>
                    </div>
                    <div class="desc">
                        <p>${movieData.Title}</p>
                        <p>${movieData.Year}</p>
                    </div>
                </div>
            `;
        }
        else {
            resultDiv.innerHTML = `
                <div>
                    <div class="image">
                        <a href="#" onClick="movieApp.getFullData('${movieData.imdbID}')"><img src="${movieData.Poster}" alt="movie_img"></a>
                    </div>
                    <div class="desc">
                        <p>${movieData.Title}</p>
                        <p>${movieData.Year}</p>
                    </div>
                </div>
            `;
        }

        // Show the data
        if(resultDiv.classList.contains('invisible')){
            resultDiv.classList.remove('invisible');
        }
    }

    // Show error
    showError(error) {
        if(errorDiv.classList.contains('invisible')){
            errorDiv.innerHTML = `
                <p>Couldn't find the data you're looking for!</p>
            `;

            errorDiv.classList.remove('invisible');
            
            localStorage.removeItem('movie');
        }
    }
}

// Instantiation
const movieApp = new Movie();


// Listen for when user submits
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let query = form.search.value.trim();
    form.reset();

    if(query.length){
        movieApp.getMovieData(query)
            .then(data => movieApp.showMovieData(data))
            .catch(err => movieApp.showError(err));
    }

    // Add/Replace the movie name in the local storage
    localStorage.setItem('movie', query);
});


// If data is available in local storage
if(localStorage.getItem('movie')){
    movieApp.getMovieData(localStorage.getItem('movie'))
        .then(data => movieApp.showMovieData(data))
        .catch(err => movieApp.showError(err));
}