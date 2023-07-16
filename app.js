//this api allows us to access all the data
let api = 'http://www.omdbapi.com/?apikey=61e576a4&t=';
//fetch is just like a promise.It executes only if the api is fetched.If the api is fetched successfully,then the response(json file which contains all the data such as actors,director,etc )is generated.
//now we need to take the elements from the html page where we want to inject the values.
let actors = document.getElementById('actors');
let director = document.getElementById('director');
let poster = document.getElementById('poster');
let desc = document.getElementById('desc');
let collection = document.getElementById('collection');
let ratings = document.getElementById('ratings');
let genre = document.getElementById('genre');
//to search and return the values of the movie entered in the search bar.
function searchMovie(){
  //gets the movie name from the html user interface.
    let movieName = document.getElementById('movieName');
    //this will add the movie name to the end of the api (ex: api=avengers,....)
    let query = api + movieName.value;
    //if query is fetched,it will return the json file which contains all the data about the entered movie..
    fetch(query).then((response)=>{
        return response.json()
    }).then((movieData)=>{
        console.log(movieData)
        title.innerText = movieData.Title;
        genre.innerText = movieData.Genre;
        date.innerText = movieData.Released;
        collection.innerText = movieData.BoxOffice;
        director.innerText = movieData.Director;
        ratings.innerText = movieData.imdbRating;
        actors.innerText = movieData.Actors;
        desc.innerText = movieData.Plot;
        poster.src = movieData.Poster;
    })
}
