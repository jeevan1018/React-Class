import React from 'react'
import useAxios from './UseAxios'
import { User_List } from './Api'

const PageComponent1 = () => {
    const [data]=useAxios(User_List);
    console.log(data,"user list")
  return (
    <div>
      <h1>hello im page 1</h1>
    </div>
  )
}

export default PageComponent1
