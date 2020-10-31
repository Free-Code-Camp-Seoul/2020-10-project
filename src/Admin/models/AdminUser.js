import { useState, createContext, useEffect } from "react";
import firebase from "../../common/lib/firebase";

const fbprovider = new firebase.auth.GoogleAuthProvider();
const signin = () => firebase.auth().signInWithPopup(fbprovider);
const signout = () => firebase.auth().signOut();

const AdminUser = createContext(null);

const P = AdminUser.Provider;

const Provider = (props) => {
  const [init, setInit] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((authedUser) => {
      if (!init) setInit(true);
      if (user !== authedUser) {
        if (!authedUser) return setUser(null);

        firebase
          .database()
          .ref(`/roles/admin${authedUser.email.replace(/\./g, "%2E")}`)
          .once("value")
          .then((ok) => {
            setUser(authedUser);
          })
          .catch(async (e) => {
            await signout();
            setError("Unauthorized User");
          });
      }
    });
  }, [setInit, setUser, init, user]);

  return (
    <P value={[{ user, init, error }, signin, signout, setError]} {...props} />
  );
};
AdminUser.Provider = Provider;

export default AdminUser;
