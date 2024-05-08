import "./displayCount.css"
import potato from "../../Component/potato.jpeg";
import tomato from "../../Component/tomato.jpeg";
import onion from "../../Component/onion.jpeg";
import chilly from "../../Component/chilly.jpeg";
import coriander from "../../Component/coriander.jpeg";
import { useState } from "react"

export const ComponentDisplayCart=()=>{
    const [itemList,setItem]=useState(
        [


            {

                id:1,
                name:"Tomato",
                image:tomato,
                price:100,
                upatedprice:100,
                count:1
            },
            {
                id:2,
                name:"Potato",
                image:potato,
                price:200,
                upatedprice:200,
                count:1
            },
            {

                id:3,
                name:"Onion",
                image:onion,
                price:300,
                upatedprice:300,
                count:1
            },
            {
                id:4,
                name:"Green Chilly",
                image:chilly,
                price:10,
                upatedprice:10,
                count:1

            },
            {

                id:5,
                name:"Coriander",
                image:coriander,
                price:5,
                upatedprice:5,
                count:1
            }
            
    ])
    
   const  Increment=(inc)=>{
        const NewAray=itemList.map((eachProduct)=>{
            if(eachProduct.id===inc.id){
                return {...eachProduct ,count:eachProduct.count+1,upatedprice:eachProduct.price*(eachProduct.count+1)}
            }else{
                return eachProduct
            }
        })

        setItem(NewAray)
    }

    const decrement=(dec)=>{
const newArray2=itemList.map((eachProduct)=>{
    if(eachProduct.id===dec.id){
        
    return {...eachProduct,count:eachProduct.count-1,upatedprice:eachProduct.price*(eachProduct.count-1)}
        
    }else{
        return eachProduct;
    }
})

setItem(newArray2.filter((item)=>item.count>0))
    }
    

    const TOtalPrice=itemList.reduce((value,item)=>{
        return value+item.upatedprice;
    },0)


    return(
        <>
        <center><h1 style={{color:"yellow",textShadow:"2px 2px 2px black"}}>Zomato</h1></center>
    

        {
            itemList.map((val)=>{
                return(
                    <>
                    <div className="cart" key={val.id}>
                    
                    <img src={val.image} alt={val.name} height={"200px"} width={"200px"}/>

                    <h2 >{val.name}</h2>
                    <h3>Rs/-{val.upatedprice}</h3>
                    <h4>Item:{val.count}</h4>
                    <button onClick={()=>Increment(val)}>+</button>
                    <button onClick={()=>decrement(val)}>-</button>
                    </div>
                   
                    </>
                )
            })
        }
         <div className="total">
            {TOtalPrice >1 ? <h1>Total:{TOtalPrice}</h1>: <h1>Your Cart is Empty :(</h1>}
                        
                    </div>
        </>
    )
}
