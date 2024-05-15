import React from 'react'

function List({objectKey, value}) {
  return (
    <p style={{color: "black"}}>{objectKey.toUpperCase()}: {value}</p>
  )
}

export default List