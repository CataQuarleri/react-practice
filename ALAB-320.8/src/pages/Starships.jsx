import Pagination from '../components/Pagination.jsx'
import StarShipCard from '../components/StarShipCard.jsx'

function Starships({currentPage, setCurrentPage, starships}) {
  return (
    <div> 
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    <div className='cardContainer'>
  {starships.map((oneCard, i)=>{
    let idArray = oneCard.url.split('starships/', 2)
    let id = idArray[1]
    return <StarShipCard key={i} name={oneCard.name} id={id} />

  })}
  </div>
  </div>
  )
}

export default Starships