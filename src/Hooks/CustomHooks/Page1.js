import React from 'react'
import useAxios from './UseAxios'
import { Product_List } from './Api'
import useCount from './UseCount';
import ButtonReuse from './Buttons';

const PageComponent2 = () => {
    const [data]=useAxios(Product_List);
    console.log(data,"from axios api")


    const [count,Increment,Decrement,Reset]=useCount(0,1);
  return (
    <div>
      <h1>hello im page 2</h1>

      <h1>{count}</h1>
      <ButtonReuse Increment={Increment} Decrement={Decrement} Reset={Reset}/>

    </div>
  )
}

export default PageComponent2
