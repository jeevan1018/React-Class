import React, { useState } from 'react'

import HigherOrderComponent from './HigherOrderComponent'

const Person1 = ({HandleIncrement,count}) => {
   


  return (
    <div>
        <h1>Person 1 Increment :{count}</h1>
        <button onClick={HandleIncrement}>Increment</button>
      
    </div>
  )
}

export default HigherOrderComponent( Person1)
