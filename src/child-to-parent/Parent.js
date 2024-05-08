import React, { useState } from 'react'
import ChildComponent from './Child'

const ParentComponent = () => {
    const [msg,setmsg]=useState("")
    const ReciveDatainPArent=(datamsg)=>{
        setmsg(datamsg)
    }

  return (
    <div>
        <h1>PArent componet</h1>
        <h1>{msg}</h1>
        <ChildComponent setDatatoParent={ReciveDatainPArent}/>
      
    </div>
  )
}

export default ParentComponent
