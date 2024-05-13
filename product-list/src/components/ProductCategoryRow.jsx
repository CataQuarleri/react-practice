import React from 'react'

function ProductCategoryRow({category}) {
  return (
    <tr>
    <th style={{fontWeight: 'bold'}}>{category}</th>
    </tr>
  )
}

export default ProductCategoryRow