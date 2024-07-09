import React, { useState } from 'react'

const HigherOrderComponent = (OriginalComponent) => {
  const UpdatedComponent=()=>{
    const [count,setcount]=useState(10)
    const HandleIncrement=()=>{
        setcount(count*2)
    }
    return <OriginalComponent HandleIncrement={HandleIncrement} count={count}/>

  }
  return UpdatedComponent
}

export default HigherOrderComponent
