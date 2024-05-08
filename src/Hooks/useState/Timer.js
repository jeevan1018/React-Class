import { useState } from "react"

export  const ComponentUSeState=()=>{


    const [Data,setData]=useState(0);
    const [timer,setTimet]=useState(15)

    const Increment=()=>{
        setData(Data+1)
    }
    const Decrement=()=>{
        
        if(Data>=1){
            setData(Data-1)
        }
    }
    const Reset=()=>{
        setData(0)
    }
    const SetTimer=()=>{
        if(timer>=0){
        setInterval(()=>{

            setTimet((timer)=> timer>0 ?timer-1: <img src={"https://th.bing.com/th/id/OIP.zg8H9cNQazAYPm4LNDNyCQHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} height={"120px"} width={"120px"}/>)

        },1000)
    }
    }


    return(
        <>
      {/*  // <h1> count:{Data}</h1> */}

        {Data <= 0 ? <h1>Count:0</h1>: <h1>Count:{Data}</h1>}
     {timer <10 ?  <div style={{backgroundColor:"red", height:"100px", width:"100px", borderRadius:"50%" ,display:"flex" ,alignItems:"center",justifyContent:"center" }}><div>{timer}</div></div>: <div style={{backgroundColor:"green", height:"100px", width:"100px", borderRadius:"50%" ,display:"flex" ,alignItems:"center",justifyContent:"center"  }}><div>{timer}</div></div> }

        <button onClick={Increment}>Add</button>
        <button onClick={Decrement}>Remove</button>
        <button onClick={Reset}>Reset Count</button>
        <button onClick={SetTimer}>Start Timer</button>
        </>
    )
}