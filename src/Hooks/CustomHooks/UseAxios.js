import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Product_List } from './Api';

const useAxios = (endpoint) => {
    const [data,setdata]=useState([]);
    useEffect(()=>{
        axios.get(endpoint).then((response)=>
        {
            console.log(response)
            setdata(response.data)
        }).catch((error)=>{
            console.error("new axios error",error)
        });

    },[]);
    return [data]

}

export default useAxios
