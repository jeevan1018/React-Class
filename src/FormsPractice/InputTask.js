import React, { useState } from 'react'

const InputTask = () => {
    const [inputdata,inputSetdata]=useState("");
    const [result,setResult]=useState("")
    const HandleInput1=(e)=>{
        e.preventDefault();
        const val=e.target.value;
        inputSetdata(val);
        setResult(val %2===0 ? "even" : "odd")


    }
  return (
    <div>
        <input type='text' value={inputdata} onChange={HandleInput1}/>
        <input type='text' value={result} />
      
    </div>
  )
}

export default InputTask
