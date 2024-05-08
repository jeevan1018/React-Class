import men1 from "./product-cart/mensshirt.webp"
import men2 from "./product-cart/whiteshirt.webp"
import men3 from "./product-cart/menshirst2.webp"
import men4 from "./product-cart/shirt.jpg"
import men5 from "./product-cart/menst.webp"

import men6 from "./product-cart/menjeans.webp"
import men7 from "./product-cart/mensjeans2.webp"
import men8 from "./product-cart/cargo.webp"
import men9 from "./product-cart/pant.jpg"
import men10 from "./product-cart/pant2.jpg"

import women1 from "./product-cart/girlT.webp"
import women2 from "./product-cart/girltop.webp"
import women3 from "./product-cart/girltop3.webp"
import women4 from "./product-cart/girlpant.webp"
import women5 from "./product-cart/girlpant2.jpg"

import women6 from "./product-cart/girldress1.webp"
import women7 from "./product-cart/girldress2.webp"
import women8 from "./product-cart/girldress3.webp"
import women9 from "./product-cart/girldress4.webp"
import women10 from "./product-cart/blue.webp"


import foot1 from "./product-cart/sandal.jpg"
import foot2 from "./product-cart/pink.webp"
import foot3 from "./product-cart/whiteshoe.webp"
import foot4 from "./product-cart/shoemen.jpg"
import foot5 from "./product-cart/shoe5.webp"

import { Component } from "react";



import { ProductComponent } from "./product-cart/ProductCart";

export class ParentCart extends Component{
   

    render(){
        const heading={
            marginLeft:"20px",
            
    
        }

        return(
            <>
            <center><h1 style={{color:"orange",textShadow:"2px 2px black"}}>Amezon Online Shoppping</h1></center>
            <h2 style={heading}>Men's Clothing:</h2>
            <ProductComponent imagePath={men2} head={"U.S. POLO ASSN."} text="Men's Wrinkle-Resistant Regular Fit Cotton Formal Shirt"  price="1999"/>
            <ProductComponent imagePath={men1} head={"Levi's"} text={"Men's Regular Fit Checked Casual Shirt"} price={"2399"}/>
            <ProductComponent imagePath={men3} head={"Jack & Jones"} text={"Men's Poly Cotton Digital Printed Half Sleeve Shirt"} price={"599"}/>
            <ProductComponent imagePath={men4} head={"Peter England"} text={"Men's Wrinkle-Resistant Regular Fit Cotton Formal Shirt"} price={"1499"}/>
            <ProductComponent imagePath={men5} head={"Flying Machine"} text={"Men's Super Soft & Breathable Fluid Cotton Solid Green Round"} price={"899"}/>
            <ProductComponent imagePath={men6} head={"Levi's"} text={"Men's 512 Slim Tapered Fit Mid Rise Jeans"} price={"3859"}/>
            <ProductComponent imagePath={men7} head={"Allen Solly"} text={"Men's Contrast Stitch Stretchable Regular Fit Jeans"} price={"3999"}/>
            <ProductComponent imagePath={men8} head={"U.S. POLO ASSN."} text={"Men's Italian Linen Solid Pyjama Pant - Linen Pant For Men -"} price={"2599"}/>
            <ProductComponent imagePath={men9} head={"Peter England"} text={"Men's Reguler Fit Polycotton Trouser Pant's Formal Trouser"} price={"2999"}/>
            <ProductComponent imagePath={men10} head={"The Indian Garage Co"} text={"Formal Pant for Men. Regular Fit, Lightweight, Flat Front,"} price={"2499"}/>
            <h2 style={heading}>Women's Clothing:</h2>
            
            <ProductComponent imagePath={women1} head={"AELOMART"} text={"Oversized Loose Baggy Fit Drop Shoulder Half Sleeves Cotton"} price={"499"}/>
            <ProductComponent imagePath={women2} head={"DIMPY GARMENTS"} text={"Mesh Sleeves Cotton Blend Polka Dot High Neck Women's"} price={"399"}/>
            <ProductComponent imagePath={women3} head={"rytras"} text={"Women's Floral Printed Cotton Top"} price={"899"}/>
            <ProductComponent imagePath={women4} head={"zayla"} text={"Women's Jeans I Denim Lycra Stretchable Skinny Fit Full-"} price={"1599"}/>
            <ProductComponent imagePath={women5} head={"KOTTY"} text={"Women High Rise Cotton Lycra Blend Ankle Length Jeans"} price={"2599"}/>
            <ProductComponent imagePath={women6} head={"Vaamsi"} text={"Women's Cotton Blend Floral Block Printed Straight Kurta"} price={"1999"}/>
            <ProductComponent imagePath={women7} head={"Vbuyz"} text={"arriva fab Women's Jacquard Fabric Jacquard Print Kurta Set with Duppata"} price={"1899"}/>
            <ProductComponent imagePath={women8} head={"Sheetal Associates"} text={"Women's Short Sleeve V-Neck Bodycon Casual Mini Dress"} price={"1599"}/>
            <ProductComponent imagePath={women9} head={"idaLia"} text={"Floral Printed Cotton Dress - Elegant Ankle Length Flared"} price={"1399"}/>
            <ProductComponent imagePath={women10} head={"KERI PERRY"} text={"Women's Georgette Floral Fit & Flared Western Dress | Dress for"} price={"1299"}/>

            
            <h2 style={heading}>Foot Wear:</h2>
            
            <ProductComponent imagePath={foot1} head={"Bata"} text={"Women's Carlene Slipper"} price={"1274"}/>
            <ProductComponent imagePath={foot2} head={"Denill"} text={"Women's Textile Slip-On Lightweight Walking Gym"} price={"499"}/>
            <ProductComponent imagePath={foot3} head={"Puma"} text={"Unisex-Adult Shuffle Perf ResCasual Shoe"} price={"3999"}/>
            <ProductComponent imagePath={foot4} head={"U.S. POLO ASSN."} text={"Mens OskarSneaker"} price={"2159"}/>
            <ProductComponent imagePath={foot5} head={"Red Chief"} text={"Leather Formal Derby Shoes for Men RC3499"} price={"1599"}/>
        
            </>
        )
    }
}