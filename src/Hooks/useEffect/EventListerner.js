import { useEffect, useState } from "react"

export const ComponentEvent=()=>{
    const [x,setx]=useState(0)
    const [y,sety]=useState(0)

    useEffect(()=>{

       window.addEventListener("mousemove",handleMouse)

    },[])

    const handleMouse=(event)=>{
        console.log(event)

        setx(event.clientX)
        sety(event.clientY)



    }

    return(
        <>
        <h1>{x}</h1>
        <h1>{y}</h1>
        </>
    )
}