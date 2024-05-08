import React, { Component } from "react";
import { PureComponent } from "react";

export class ChildPureComponent extends React.PureComponent{
    render(){
        console.log("im child")
        return(
            <>
            <h1>Im child</h1>
            </>
        )
    }
}