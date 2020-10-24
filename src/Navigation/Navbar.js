import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/products">
        Products
      </NavLink>
      <NavLink className="nav-link" to="/admin">
        Admin
      </NavLink>
      <NavLink className="nav-link" to="/cart">
        Cart
      </NavLink>
    </div>
  );
}
