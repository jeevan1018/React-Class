import { Component, PureComponent } from "react";
import { ChildPureComponent } from "./Child";

export class  ParentPureComponent extends PureComponent{
    state={name:"jeevan"}
    componentDidMount(){
        


        setInterval(() => {
        this.setState({name:"kowshik"})
        
    },1000);
}
    render(){
        console.log("hello Parent")

        return(
            <>
            <h1>Im parent</h1>
            <ChildPureComponent/>
            </>
        )
    }
}