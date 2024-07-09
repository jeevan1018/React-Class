import React, { useCallback, useEffect, useState } from 'react'

const PracticeEvents = () => {
    const [count,setcount]=useState(0)
   const HandleIncrement= useCallback(()=>{
setcount(count+1)

    },[])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={HandleIncrement}>Click Increment</button>
      
    </div>
  )
}

export default PracticeEvents
