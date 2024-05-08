import React from 'react'

const ChildComponent = ({setDatatoParent}) => {
    const data="hello im child component";

    const HandleChildData=()=>{
        
        setDatatoParent(data)
    }


  return (
    <div>
     <button onClick={HandleChildData}>Click me</button> 
      
    </div>
  )
}

export default ChildComponent
