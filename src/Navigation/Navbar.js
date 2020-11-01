import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import {getListInCart} from "../common/lib/localStorage"

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
        Cart ({(getListInCart()||[]).length})
      </NavLink>
    </div>
  );
}
