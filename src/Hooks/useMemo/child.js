import React, { useMemo, useState } from 'react';

const ChildMemo = ({ value }) => {
    const [count,setCount]=useState(0)
    const Captalize = useMemo(() => {
        console.log("text from child");
        return value.toUpperCase();
    },[value]);

const HandleCount=()=>{
    setCount(count+1)
}

    return (
        <div>
            <h1>im child</h1>
            <h2>{value}</h2>
            <h1>{Captalize}</h1>
<h1>{count}</h1>
            <button onClick={HandleCount}>Click</button>
        </div>
    );
};

export default ChildMemo;
