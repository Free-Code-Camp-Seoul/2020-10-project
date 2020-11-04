// import { useState, createContext, useEffect } from "react";
import React from "react";
import globalHook from "use-global-hook";
import firebase from "../../common/lib/firebase";

const fbprovider = new firebase.auth.GoogleAuthProvider();

// const AdminUser = createContext(null);

// const P = AdminUser.Provider;

const initialState = {
  initializing: false,
  init: false,
  user: null,
  error: null,
};

const actions = {
  init: (store) => {
    // Prevent initializing multiple times;
    if (store.state.intializing || store.state.init) return;
    store.setState({ ...store.state, initializing: true });
    return firebase.auth().onAuthStateChanged((authedUser) => {
      const user = store.state.user;
      if (user !== authedUser) {
        if (!authedUser) {
          store.actions.setUser(null);
          return;
        }
        firebase
          .database()
          .ref(`/roles/admin${authedUser.email.replace(/\./g, "%2E")}`)
          .once("value")
          .then((ok) => {
            store.actions.setUser(authedUser);
          })
          .catch(async (e) => {
            store.actions.signout();
            store.actions.setError("Unauthorized User");
          })
          .finally(() => {
            store.actions.setInit();
          });
      }
      store.setState({ init: true });
    });
  },
  setInit: (store) =>
    store.setState({ ...store.state, initializing: false, init: true }),
  setUser: (store, user) => store.setState({ ...store.state, user }),
  setError: (store, error) => store.setState({ ...store.state, error }),
  signin: () => firebase.auth().signInWithPopup(fbprovider),
  signout: () => firebase.auth().signOut(),
};

const _useAdminUser = globalHook(React, initialState, actions);

const useAdminUser = () => {
  const [
    { init: initState, user },
    { init, signin, signout, setError },
  ] = _useAdminUser();
  init();
  return [
    { init: initState, user },
    { signin, signout, setError },
  ];
};
export default useAdminUser;
