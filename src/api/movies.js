import axios from "axios";

const Url = 'http://www.omdbapi.com/?apikey=54395adb&'

function searchMovie(searchPhrase){
  return axios.get(`${Url}&s=${searchPhrase}`)
}

console.log(searchMovie())
export {searchMovie}