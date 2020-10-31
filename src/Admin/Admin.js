import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { useAuthenticated } from "./models/AdminUser";
import Login from "./Login";

export default function Admin() {
  const authenticated = useAuthenticated();
  const { pathname: current } = useLocation();

  return (
    <>
      {authenticated ? (
        <Switch>
          <Route path={`${current}`}>
            <div>Here is the Admin page</div>
          </Route>
        </Switch>
      ) : (
        <Login />
      )}
    </>
  );
}
