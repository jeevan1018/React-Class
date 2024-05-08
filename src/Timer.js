import { Component } from "react";

export class TimerComponent extends Component{


    state={

        timer:15
    }

    HandleTimer=()=>{

      //  console.log("working.....")

    let TimerValue= setInterval(()=>{
        this.setState({
            timer: this.state.timer-1 
          })
     },1000)
     //console.log(Timer)

     this.setState({TimerValue});
    }

    StopTimer=()=>{
  
    }

    render(){

        return(
            <>
            <h1>Timer:</h1>
            <button onClick={this.StopTimer}>Stop Timer</button>

          {this.state.timer <=0 ? <h1>Your time is up</h1>:  <div style={{backgroundColor :this.state.timer < 10 ? "red" : "green" ,height:"100px" ,width:"100px"}}><div style={{alignItems:"center"}}>{this.state.timer}</div></div>}
            <button onClick={this.HandleTimer}>Start</button>
            </>
        )
    }
}