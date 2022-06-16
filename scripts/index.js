const form = document.querySelector('form');
const image = document.querySelector('img');
const desc = document.querySelector('.desc');
const resultDiv = document.querySelector('.result');
const errorDiv = document.querySelector('.error');


// Listen for when user submits
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let query = form.search.value.trim();
    form.reset();

    if(query.length){
        getData(query)
            .then(returnedData => {
                outputData(returnedData);
            })
            .catch(err => showError(err));
        
    }

    localStorage.setItem('name', query);
});

// If data is available in local storage
if(localStorage.getItem('name')){
    getData(localStorage.getItem('name'))
        .then(returnedData => {
            outputData(returnedData);
        })
        .catch(err => showError(err));
}


// Set the data to html document
const outputData = (returnedData) => {
    image.setAttribute('src', returnedData.Poster);

    desc.innerHTML = `
        <p>Name: ${returnedData.Title}</p>
        <p>Released: ${returnedData.Year}</p>
        <p>Type: ${returnedData.Type}</p>
    `;

    // Show the data
    if(resultDiv.classList.contains('invisible')){
        resultDiv.classList.remove('invisible');
    }
};


// If any error occurs
const showError = (err) => {
    localStorage.clear();
    
    if(errorDiv.classList.contains('invisible')){
        errorDiv.innerHTML = `
            <p>${err}</p>
        `;

        errorDiv.classList.remove('invisible');
    }
}