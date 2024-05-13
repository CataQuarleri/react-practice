import React from 'react'

function EachButton({value, action}) {
    return (
        <>
    <button className="btn" value={value} onClick={()=>action(value)}>
        {value}
    </button>
    </>
  )
}

export default EachButton