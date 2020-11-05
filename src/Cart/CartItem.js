import CartContext from "./models/CartContext";
import React from "react";


const CartItem = (props)=>{
    console.log("cart item", props.item);
    const {imgUrl,name,price,productSummary,quantity } = props.item;
    const {buyProduct, removeProduct} = React.useContext(CartContext);

    return (
        <div  className="row" style={{width:'100%', border:'1px solid red', display:'flex', flexDirection:'row', padding:'10px 5px 10px 5px'}}>
        <div className="ImgHolder" style={{width:'20%' , border:'1px solid green',position:'relative'}}>
            <img src={imgUrl} style={{position:'relative', maxHeight:'100%', maxWidth:'100%'}}/>
        </div>
        <div className="DetailHolder" style={{width:'60%', border:'1px solid blue'}}>
            <div style={{display:'flex', flexDirection:'column'}}>
                <span>{name}</span>
                <span>{productSummary}</span>

            </div>
        </div>
        <div className="ButtonsAndPrices" style={{width:'20%' ,border:'1px solid yellow', position:'relative'}}>
            <div className="ButtonHolders" style={{position:'absolute', top:0 ,right:0, left:0}}>
               <div>
                   <button style={{marginRight:"10px"}} onClick={e=>buyProduct({productData:props.item})}> + </button>
                  <span > {quantity}</span>
                   <button style={{marginLeft:"10px"}} onClick={e=>removeProduct({productData:props.item})}> - </button>
               </div>
            </div>
            <div className="PriceHolder" style={{position:'absolute', bottom:0}}>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <span>Total Price: {quantity*price}</span>
                </div>
            </div>

        </div>

    </div>)
}
export default CartItem;