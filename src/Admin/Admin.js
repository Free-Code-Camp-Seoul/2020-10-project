import React, { useContext } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import AdminUser from "./models/AdminUser";
import Login from "./Login";
import AdminIndex from "./AdminIndex";

const AdminRouter = () => {
  const [{ user, init }] = useContext(AdminUser);
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
};

export default function Admin() {
  return (
    <AdminUser.Provider>
      <AdminRouter />
    </AdminUser.Provider>
  );
}
