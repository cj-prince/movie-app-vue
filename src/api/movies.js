import axios from "axios";

const Url = 'https://www.omdbapi.com/'
const apiKey = process.env.VUE_APP_OMDB_API_KEY


function searchMovie(searchPhrase, page = 1){
  return axios.get(`${Url}?apikey=${apiKey}&s=${searchPhrase}&page=${page}`)
}

function singleMovie(movieId){
  return axios.get(`${Url}?apikey=${apiKey}&i=${movieId}`)
}


export {searchMovie, singleMovie}