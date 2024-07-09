import React, { useState } from 'react'


const RemoveImg = () => {
    const [state,setstate]=useState(true)
    const HandleDelete=()=>{
        console.log("clicked")
        setstate(false)

    }
  return (
    <>
    {state ? (
    <div>
        <button style={{border:"none" , height:"15px", width:"15px"}} onClick={HandleDelete}><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVstt89ghfkH86_QUXzBz9YvgB1iQxhqTJxg&s"} height={"15px"} width={"15px"}/></button>
        <div style={{backgroundColor:"red", border:"2px solid black", height:"200px",width:"300px"}}></div>
      
    </div>
    ):(<div></div>)
}
    </>
  )
}

export default RemoveImg
