import { useState } from "react"

export const ComponentUseState2=()=>{
 

    const [listItem,setListItem]=useState(["list1","list2"]);

    const HandleEvent=()=>{
        
        setListItem([...listItem,`list ${listItem.length+1}`])
    }
                    
    return(
        <>

<button onClick={HandleEvent}>Add list</button>
<h1>{listItem}</h1>
        </>
    );
}