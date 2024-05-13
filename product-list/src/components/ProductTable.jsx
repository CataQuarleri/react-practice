import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

function ProductTable({filterText, products, inStockOnly}) {
    let rows = []
    let lastCategory = null;

    products.map((product) => {
        let p = product.name.toLowerCase()
        let search = filterText.toLowerCase()
        if(!p.includes(search)){
            return
        }
       
        if (inStockOnly && !product.stocked){
            return
        }

        if(product.category !== lastCategory){
            rows.push(<ProductCategoryRow
            key={product.category}
            category={product.category}
            />)
        }
        rows.push(<ProductRow
        key={product.name}
        product={product}
        />)
        lastCategory = product.category;
    })
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
   
</>
  )
}

export default ProductTable