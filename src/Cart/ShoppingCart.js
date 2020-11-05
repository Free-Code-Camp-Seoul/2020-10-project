import React from "react";
import CartContext from "../Cart/models/CartContext";
import { data } from "../Data/data";
import CartItem from "./CartItem"

export default function ShoppingCart() {
  const products = data.products;
  const productListInJson = {};
  products.forEach(item=>{
    productListInJson[item.uid] = item;
  })

  const {buyProduct,allDataInCart} = React.useContext(CartContext);
  console.log("allDataInCart", allDataInCart);
  return (<div>
    <h1>Shopping cart page</h1>
    <div>
      {allDataInCart.map(data=>{
        const item = productListInJson[data.productId];

        return <CartItem item={{...item, ...data}} />
      })}
    </div>
    <button style={{width:'200px', background:'blue',  margin:'10px', padding:'20px'}}>
      Checkout
    </button>


  </div>)
}
