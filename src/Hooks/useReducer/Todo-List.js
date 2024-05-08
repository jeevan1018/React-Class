import { type } from "@testing-library/user-event/dist/type";
import { useReducer, useState } from "react"
const InitialState=[];

const Reducer=function(state,action){

    switch(action.type){
        case "ADD_TASK":
            return [
                ...state,{
            id:state.length+1,
                name:action.payload

            }

            ]
            case "DELETE_TEXT":
                return state.filter(e=>e.id != action.payload)


        case "REST_TASK":
            return action.payload

            default :
            return state
    }

 


}
const initUpdate=function(InitialState){
    return InitialState
}

export const TodoListComponent=()=>{


    const [Todo,Dispatch]=useReducer(Reducer,InitialState,initUpdate);
    const[text,setText]=useState("")

const HandleText=()=>{
    Dispatch({
        type:"ADD_TASK",
        payload:text
    })

    setText("")
}
const DeleteText=(id)=>{
    Dispatch({
        type:"DELETE_TEXT",
        payload:id
    })

}

       
    


    return(
        <div>
            <center>
                <h1>Todo List {Todo.length} </h1>
                <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/> 
                <button onClick={HandleText}>Add</button> <button onClick={(e)=>Dispatch({type:"REST_TASK",payload:InitialState})}>Reset</button>


{
    Todo.map((item)=>{
        return(
            <>
            <li key={item.id}>{item.name}<span> <button onClick={()=>DeleteText(item.id)}>Delete</button></span></li>
            </>
        )
    })
}
            </center>
        </div>
    )

}