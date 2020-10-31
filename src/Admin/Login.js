import React from "react";
import "./Login.css";
import GoogleSigninButton from "./components/GoogleSigninButton";

const Login = () => (
  <div className="login__container">
    <GoogleSigninButton />
  </div>
);

export default Login;
