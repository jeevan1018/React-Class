import { Component } from "react";

export class ClassComponent extends Component{

    render(){

        return(
            <>
            <h1> Hello {this.props.name}</h1>
        <h1>{this.props.text}</h1>
        {this.props.children}
            </>
        )
    }
}