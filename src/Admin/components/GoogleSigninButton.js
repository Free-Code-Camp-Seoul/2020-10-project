import React from "react";
import "./GoogleSigninButton.css";

const GoogleSigninButton = (props) => (
  <>
    <link
      rel="stylesheet"
      type="text/css"
      href="//fonts.googleapis.com/css?family=Open+Sans"
    />

    <div className="google-btn" {...props}>
      <div className="google-btn__icon-wrapper">
        <img
          className="google-btn__icon"
          alt="google logo"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        />
      </div>
      <p className="google-btn__text">
        <b>Sign in with google</b>
      </p>
    </div>
  </>
);

export default GoogleSigninButton;
