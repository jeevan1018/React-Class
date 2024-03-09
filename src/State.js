import { Component } from "react";

export class StateComponent extends Component{
    state={
value:false,
initialSate:"Subscribe",
finalState:"Subscribed"

    }


    Change=()=>{

        //console.log("hello")

     
    this.setState({

        value:!this.state.value
    }
    )


    }

    render(){
        return(
            <>
            <button onClick={this.Change} style={{backgroundColor:this.state.value ? "gray" : "red"}}>{this.state.value ? this.state.finalState:this.state.initialSate}</button>

            </>
        );
    }
}