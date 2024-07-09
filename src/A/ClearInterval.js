import React, { useEffect, useState } from 'react'

const ClearInterval = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        const TimerId=setInterval(()=>{
            setCount(prev=>prev+1)
        },2000)

        return()=>{
            if(count===10){
                clearInterval(TimerId)
            }
            
    }

    },[count])
  return (
    <div>
        <h1>Timer</h1>
        {count}
      
    </div>
  )
}

export default ClearInterval
