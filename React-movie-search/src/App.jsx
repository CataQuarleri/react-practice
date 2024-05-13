import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

const API_KEY = '98e3fb1f'
const SOURCE_URI='http://www.omdbapi.com/'

function App() {
const [movieData, setMovieData] = useState();

async function getMovie(searchTerm){
  try{
      const response = await axios.get(`${SOURCE_URI}?apikey=${API_KEY}&t=${searchTerm}`).then(response=>  response.data)
    setMovieData(response)
  } catch(e){
    console.log("ERROR: ", e)
  }
}

useEffect(()=> {
  getMovie('Clueless')
}, [])

  return (
    <div className="App">
     <Form getMovie={getMovie}/>
     <MovieDisplay  movie={movieData}/>
    </div>
  )
}

export default App
