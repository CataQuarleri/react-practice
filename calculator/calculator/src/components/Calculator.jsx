import React from 'react'
import ButtonBox from './ButtonBox'
import {useState} from 'react'

function Calculator() {
    const [displayValue, setDisplayValue] = useState("")
    const [firstOperand, setFirstOperand] = useState("")
    const action = (btn)=>{
        setDisplayValue(prev => prev + btn)
        if(typeof btn !== "number" && btn != "=" && btn != "AC"){
          setFirstOperand(displayValue + btn)
          setDisplayValue("")
        }
        if(btn === "="){
            setDisplayValue(eval(firstOperand + displayValue).toString())
        }else if (btn === "AC"){
            setDisplayValue("")
        }
    }
  return (
    <div className="calculator">
    <div className="displayBox">{displayValue}</div>
    <ButtonBox action={action}/>
    </div>
  )
}

export default Calculator