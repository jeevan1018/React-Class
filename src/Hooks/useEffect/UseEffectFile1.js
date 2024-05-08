import { useEffect, useState } from "react"

export const ComponentUseEffect=()=>{
const [count,setcount]=useState(0);
const [price,setprice]=useState(100);


useEffect(()=>{
    
    document.write=count

    console.log("hello useEffect")
},[price]
)

const HandleCount=()=>{

    setcount(count+1)
}
const HandlePrice=(val)=>{

    setprice(price+val)
}

    return(
        <>
{count}
        <button onClick={HandleCount}>count</button>
        {price}
<button  onClick={()=>HandlePrice(400)}>Price </button>

        </>
    )
}