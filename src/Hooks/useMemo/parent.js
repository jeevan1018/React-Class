import React, { useState } from 'react'
import ChildMemo from './child'

const  ParentMemo = () => {
    const [text]=useState("i'm parent component")
  return (
    <div>
      <h1>Im Parent</h1>
      <ChildMemo value={text}/>
    </div>
  )
}

export default  ParentMemo
