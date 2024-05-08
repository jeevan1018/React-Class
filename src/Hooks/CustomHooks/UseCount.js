import { useState } from "react"

const useCount=(a,b)=>{

const [count,setcount]=useState(a)

const Increment=()=>{

    setcount(count+b)
}
const Decrement=()=>{
    if(count>=1)
    setcount(count-b)
}
const Reset=()=>{
    setcount(a)
}
return [count,Increment,Decrement,Reset]
}

export default useCount