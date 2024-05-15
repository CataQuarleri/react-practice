

function StarShipCard({name, capacity, consumables}) {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>Cargo Capacity: {capacity}</p>
      <p>Consumables: {consumables}</p>
    </div>
  )
}

export default StarShipCard