import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import getAllStarships from './services/sw.api'
import Header from './components/Header.jsx'
import Starships from './pages/Starships.jsx'
import OneStarship from './pages/OneStarship.jsx'

function App() {
const [starships, setStarships] = useState([])
const [currentPage, setCurrentPage] = useState(1)
  useEffect(()=>{
    async function getShips(){
      let results = await getAllStarships(currentPage)
      setStarships(results)
      console.log(results)
    }
    getShips()
  }, [currentPage])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Starships currentPage={currentPage} setCurrentPage={setCurrentPage} starships={starships}/>}/>
        <Route path="/:id" element={<OneStarship />} />
      </Routes>
     
    </div>
  )
}

export default App
