import React, { useReducer, useState } from 'react'
const reducerFunction=(state,action)=>{
    switch(action.type){
        case "INCREMENT_BY_10":
            return {
                name:action.updatedName,
                ...state,
                age:state.age+10
            }

            case "DECREMENT_BY_10":

            return{
                name:action.updatedName,
                ...state,
                age:state.age-10
            }
            case "CHANGE_NAME":
                return{
                    name:action.updatedName,
                    
                    age:state.age
                }
                case "INCREASE_BY_50":
                    return{
                        ...state,
                        age:state.age+50
                    }

            default :
            return state
    }

}

const ReducerComponent = () => {
    const initialState={name:"jeevan",age:23,id:1,salary:300000,address:{lat:20,long:30}}
    const [name,setname]=useState("")

    const [currentState,dispatch]=useReducer(reducerFunction,initialState)
    const HandleIncrement=()=>{
        dispatch({
            type:"INCREMENT_BY_10",
            updatedName:name

        })
    }
    const HandleDecrement=()=>{
        dispatch({
            type:"DECREMENT_BY_10",
            updatedName:name
        })

       
    }

    const HandleName=()=>{
        dispatch({
            type:"CHANGE_NAME",
            updatedName:name
        })
    }
    const HandleBy50=()=>{
        dispatch({
            type:"INCREASE_BY_50"

        })
    }
  return (
    <div>
        <h1>{currentState.name}</h1>
        <h1>{currentState.age <0? 0:currentState.age}</h1>
        <input value={name} onChange={(event)=>setname(event.target.value)}/>
        <button onClick={HandleIncrement}>Increment by 10</button>
        <button onClick={HandleDecrement}>Decrement by 10</button>
        <button onClick={HandleBy50}>Incrementt by 50</button>
        <button onClick={HandleName}>Change name</button>
      
    </div>
  )
}

export default ReducerComponent
