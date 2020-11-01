import { useState, createContext, useEffect,useReducer } from "react";

import {addInCart,getListInCart} from "../../common/lib/localStorage";

const CartContext = createContext(null);

const P = CartContext.Provider;
// let allDataInCart = getListInCart();


console.log("creating context");
const Provider = (props) => {

    const [allDataInCart, setAllDataInCart] = useReducer((state, item)=>[...state,item], getListInCart()||[])

    const buyProduct=({productData})=>{
        const allDataInCart = addInCart({userId:'sam', productId:productData.uid, quantity:1});
        setAllDataInCart({allDataInCart});
    }
    console.log("creating context: ",allDataInCart);
    return (
       <P value={{buyProduct,allDataInCart}}  {...props} />

   );
};

CartContext.Provider = Provider;

export default CartContext;
