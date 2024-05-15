import {Link} from 'react-router-dom'

function StarShipCard({id, name}) {

  return (
    <Link to={`/${id}`} >
    <div className='card'>
      <h2>{name}</h2>
    </div>
    </Link>
  )
}

export default StarShipCard