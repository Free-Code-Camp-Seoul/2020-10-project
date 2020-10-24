import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "../Main/Main";
import Products from "../Product/ProductList";
import Admin from "../Admin/Admin";
import ShoppingCart from "../Cart/ShoppingCart";
import NotFound from "../Errors/NotFound";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/cart">
          <ShoppingCart />
        </Route>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}