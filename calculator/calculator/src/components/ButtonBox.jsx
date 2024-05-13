import React from 'react'
import EachButton from './Button.jsx'
const buttons =["AC", "+-", "%", "/",
    7, 8, 9, "*",
    4, 5, 6, "-",
    1, 2, 3, "+",
    0, ".", "="];

function ButtonBox({action}) {
  return (
    <div className="ButtonBox">
    {buttons.map((oneBtn, i)=>{
       return <EachButton key={i} value={oneBtn} action={action} />
    })}
    </div>
  )
}

export default ButtonBox