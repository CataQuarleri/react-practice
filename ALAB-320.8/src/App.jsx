import { useEffect, useState } from 'react'
import './App.css'
import getAllStarships from './services/sw.api'
import StarShipCard from './components/StarShipCard.jsx'
import Header from './components/Header.jsx'

function App() {
const [starships, setStarships] = useState([])
  useEffect(()=>{
    async function getShips(){
      let results = await getAllStarships()
      console.log("RESULTS", results)
      setStarships(results)
      console.log('STAR', starships)
    }
    getShips()
  }, [])
  return (
    <div className="App">
      <Header />
      <div className='cardContainer'>
    {starships.map((oneCard, i)=>{
      return <StarShipCard key={i} name={oneCard.name}/>
    })}
    </div>
    </div>
  )
}

export default App
