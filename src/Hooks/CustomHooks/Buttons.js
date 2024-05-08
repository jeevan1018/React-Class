import React from 'react'

const ButtonReuse = ({Increment,Decrement,Reset}) => {
  return (
    <div>
       <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default ButtonReuse
