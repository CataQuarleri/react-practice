import { useEffect, useState } from 'react'
import './App.css'
import getAllStarships from './services/sw.api'
import StarShipCard from './components/StarShipCard.jsx'
import Header from './components/Header.jsx'
import Pagination from './components/Pagination.jsx'

function App() {
const [starships, setStarships] = useState([])
const [currentPage, setCurrentPage] = useState(1)
  useEffect(()=>{
    async function getShips(){
      let results = await getAllStarships(currentPage)
      setStarships(results)
    }
    getShips()
  }, [currentPage])
  return (
    <div className="App">
      <Header />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <div className='cardContainer'>
    {starships.map((oneCard, i)=>{
      return <StarShipCard key={i} name={oneCard.name} capacity={oneCard.cargo_capacity} consumables={oneCard.consumables}/>

    })}
    </div>
    </div>
  )
}

export default App
