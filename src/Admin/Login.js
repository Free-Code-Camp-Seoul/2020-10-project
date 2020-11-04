import React from "react";
import "./Login.css";
import LoginError from "./components/LoginError";
import GoogleSigninButton from "./components/GoogleSigninButton";
import useAdminUser from "./models/AdminUser";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ error }, { signin: adminUserSignin, setError }] = useAdminUser();
  console.log(setError);
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
