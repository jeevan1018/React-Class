import { useEffect, useState } from "react"

export const ComponentTimer=()=>{



    const [timer,settimer]=useState(10)


    useEffect(()=>{

       

        
       const timeValue= setInterval(()=>{
            
            settimer(timer=>timer-1)


        },1000)
        return ()=>{
            
            timer<1?    clearInterval(timeValue):timer
        
                
        
        
        



        }
    

    },[])
   

    return(
        <>
        {timer >0 ? <h1>{timer}</h1>: <h1>your time is up</h1>}
        
        </>
    )
}