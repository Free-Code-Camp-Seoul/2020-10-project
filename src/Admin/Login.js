import React, { useContext } from "react";
import "./Login.css";
import LoginError from "./components/LoginError";
import GoogleSigninButton from "./components/GoogleSigninButton";
import AdminUser from "./models/AdminUser";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ error }, adminUserSignin, _signout, setError] = useContext(AdminUser);
  const signin = () => {
    setError(null);
    adminUserSignin();
  };

  return (
    <div className="login__container">
      <GoogleSigninButton onClick={signin} />
      {error && <LoginError>{error}</LoginError>}
    </div>
  );
};

export default Login;
