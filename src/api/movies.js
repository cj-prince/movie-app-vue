import axios from "axios";

const Url = 'http://www.omdbapi.com/?apikey=54395adb'


function searchMovie(searchPhrase){
  return axios.get(`${Url}&s=${searchPhrase}`)
}

function singleMovie(movieId){
  return axios.get(`${Url}&i=${movieId}`)
}


export {searchMovie, singleMovie}