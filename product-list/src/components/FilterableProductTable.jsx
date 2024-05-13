import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"
import { useState } from "react"

function FilterableProductTable({products}) {
    const [filterText, setFilterText] = useState('')
    const [inStockOnly, setInStockOnly] = useState(false)
  return (
    <>
            <SearchBar 
            filterText={filterText}
            inStockOnly={inStockOnly}
            onChangeFilterText={setFilterText}
            onChangeInStockOnly={setInStockOnly}/>
            <ProductTable 
            products={products} 
            filterText={filterText}
            inStockOnly={inStockOnly}
            />
        </>
  )
}

export default FilterableProductTable