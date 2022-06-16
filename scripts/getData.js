// Get movie data based on search query
const getData = async (query) => {
    let response = await fetch(`http://www.omdbapi.com/?apikey=[YOUR-API-KEY]&s=${query}`);
    let data = await response.json();
    return data.Search[0];
}