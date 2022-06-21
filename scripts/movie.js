const showFullMovieData = () => {
    const data = localStorage.getItem('fullMovieData');
    const fullData = JSON.parse(data);
    const mainDiv = document.querySelector('.main');

    if (fullData.Poster === 'N/A') {
        const poster = 'https://via.placeholder.com/320';

        mainDiv.innerHTML = 
        `
            <div class="img">
                <img src="${poster}" alt="movie_img">
            </div>

            <div class="details">
                <h2>${fullData.Title}</h2>
                <div class="para">
                    <table>
                        <tr><td>Released:</td><td><span>${fullData.Released}</span></td></tr>
                        <tr><td>Runtime:</td><td><span>${fullData.Runtime}</span></td></tr>
                        <tr><td>Rated:</td><td><span>${fullData.Rated}</span></td></tr>
                        <tr><td>Genre:</td><td><span>${fullData.Genre}</span></td></tr>
                        <tr><td>Director:</td><td><span>${fullData.Director}</span></td></tr>
                        <tr><td>Actors:</td><td><span>${fullData.Actors}</span></td></tr>
                        <tr><td>Plot:</td><td><span>${fullData.Plot}</span></td></tr>
                        <tr><td>Country:</td><td><span>${fullData.Country}</span></td></tr>
                        <tr><td>BoxOffice:</td><td><span>${fullData.BoxOffice}</span></td></tr>
                    </table>
                </div>
            </div>
        `;
    }
    else {
        mainDiv.innerHTML = 
        `
            <div class="img">
                <img src="${fullData.Poster}" alt="movie_img">
            </div>

            <div class="details">
                <h2>${fullData.Title}</h2>
                <div class="para">
                    <table>
                        <tr><td>Released:</td><td><span>${fullData.Released}</span></td></tr>
                        <tr><td>Runtime:</td><td><span>${fullData.Runtime}</span></td></tr>
                        <tr><td>Rated:</td><td><span>${fullData.Rated}</span></td></tr>
                        <tr><td>Genre:</td><td><span>${fullData.Genre}</span></td></tr>
                        <tr><td>Director:</td><td><span>${fullData.Director}</span></td></tr>
                        <tr><td>Actors:</td><td><span>${fullData.Actors}</span></td></tr>
                        <tr><td>Plot:</td><td><span>${fullData.Plot}</span></td></tr>
                        <tr><td>Country:</td><td><span>${fullData.Country}</span></td></tr>
                        <tr><td>BoxOffice:</td><td><span>${fullData.BoxOffice}</span></td></tr>
                    </table>
                </div>
            </div>
        `;
    }
}

showFullMovieData();