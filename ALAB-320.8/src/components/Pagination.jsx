import React from 'react'

function Pagination({currentPage, setCurrentPage}) {
function handlePrevious(){
    if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
}
function handleNext(){
    if(currentPage < 5){
        setCurrentPage(currentPage + 1);
    }
      
}
  return (
   <>
   <span><button className="pagBtn" onClick={handlePrevious} disabled={currentPage === 1}>Prev</button>
   <button className="pagBtn" onClick={handleNext} disabled={currentPage === 4}>Next</button></span>
   </>
  )
}

export default Pagination