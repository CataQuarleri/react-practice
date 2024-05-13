import React from 'react'

function SearchBar({filterText, inStockOnly, onChangeFilterText, onChangeInStockOnly}) {
  return (
   <>
   <input type="search" 
   placeholder="Search" 
   value={filterText}
   onChange={(e)=> onChangeFilterText(e.target.value)}
   ></input>

    
   <label>
    <input type="checkbox" 
    checked={inStockOnly}
    onChange={(e)=>onChangeInStockOnly(e.target.checked)}
    /> 
    Only show products that are in stock
    </label>

   </>
  )
}

export default SearchBar