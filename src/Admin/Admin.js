import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import AdminUser from "./models/AdminUser";
import Login from "./Login";
import AdminIndex from "./AdminIndex";

export default function Admin() {
  const [{ user, init }] = AdminUser();
  const authenticated = Boolean(user);
  const { pathname: current } = useLocation();
  if (!init) {
    return <div>Initializing...</div>;
  }
  if (!authenticated) {
    return <Login />;
  }

  return (
    <Switch>
      <Route path={`${current}`}>
        <AdminIndex />
      </Route>
    </Switch>
  );
}
