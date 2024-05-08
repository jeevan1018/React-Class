import axios from "axios"
import { useEffect, useState } from "react"

export const ComponentApiCall=()=>{

const [data,setdata]=useState([])

    useEffect(
        ()=>{
axios.get("https://fakestoreapi.com/products")
.then((res)=>{
    console.log(res.data)

    setdata(res.data)
})
.catch((err)=>{
    console.error("new error",err)
})

        },[]
    );
    console.log(data)




    return (
        <>
         {

            data.map((value)=>{

                return (
                    <div key={value.id}>
                        <h1>{value.description}</h1>
                        <img src={value.image}/>
<h2>{value.title}</h2>
                    </div>
                )
            })
        } 

        </>
    );
}