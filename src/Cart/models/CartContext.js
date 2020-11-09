import { useState, createContext } from "react";

import {
  addInCart,
  getListInCart,
  removeFromCart,
} from "../../common/lib/localStorage";

const CartContext = createContext(null);

const P = CartContext.Provider;
// let allDataInCart = getListInCart();

console.log("creating context");
const Provider = (props) => {
  const [allDataInCart, setAllDataInCart] = useState(getListInCart() || []);

  const buyProduct = ({ productData }) => {
    addInCart({ userId: "sam", productId: productData.uid, quantity: 1 });
    setAllDataInCart(getListInCart()); //update the state to notify other component
  };
  const removeProduct = ({ productData }) => {
    removeFromCart({ userId: "sam", productId: productData.uid, quantity: 1 });
    setAllDataInCart(getListInCart()); //update the state to notify other component
  };
  return <P value={{ buyProduct, allDataInCart, removeProduct }} {...props} />;
};

CartContext.Provider = Provider;

export default CartContext;
