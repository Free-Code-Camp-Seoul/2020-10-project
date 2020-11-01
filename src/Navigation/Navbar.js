import React, { useContext,useReducer }from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import {getListInCart} from "../common/lib/localStorage"
import CartContext from "../Cart/models/CartContext";

const CartCount = ()=>{
    const {allDataInCart=[]} = useContext(CartContext);
    console.log("allDataInCart:",allDataInCart);
    const [count, setCount] = useReducer((state, item)=>[...state,item], allDataInCart.length||0)

    return (<div>
        Cart ({count})
    </div>)
}
export default function Navbar() {
  return (
    <div className="navbar">
      <h2>Ben's Pets</h2>
      <NavLink className="nav-link" to="/">
        Main
      </NavLink>
      <NavLink className="nav-link" to="/products">
        Products
      </NavLink>
      <NavLink className="nav-link" to="/admin">
        Admin
      </NavLink>
      <NavLink className="nav-link" to="/cart">
          <CartContext.Provider>
             <CartCount/>
          </CartContext.Provider>
      </NavLink>
    </div>
  );
}
