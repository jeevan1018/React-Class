import "./ProductCart.css"
const { Component } = require("react");


 export class ProductComponent extends Component{

    render(){

        return(
            <>
            <div className="cart">
                <img src={this.props.imagePath} height={"250px"} width={"150px"} />
                <p className="text"><b>{this.props.head}</b></p>
                <p className="text">{this.props.text}</p>
                <p className="price">Rs.{this.props.price}/-</p>
            </div>
            </>
        );
    }
}