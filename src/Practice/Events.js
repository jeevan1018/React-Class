import React from 'react'

const EventsComponent = () => {
    const HandleEvent=(a)=>{
        alert(a.type)
    }
  return (
    <div>
        <button onClick={(event)=>HandleEvent(event)}>Click</button>
      
    </div>
  )
}

export default EventsComponent
