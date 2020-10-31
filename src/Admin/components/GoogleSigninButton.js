import React from "react";
import "./GoogleSigninButton.css";

const GoogleSigninButton = () => (
  <>
    <link
      rel="stylesheet"
      type="text/css"
      href="//fonts.googleapis.com/css?family=Open+Sans"
    />

    <div class="google-btn">
      <div class="google-btn__icon-wrapper">
        <img
          class="google-btn__icon"
          alt="google logo"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        />
      </div>
      <p class="google-btn__text">
        <b>Sign in with google</b>
      </p>
    </div>
  </>
);

export default GoogleSigninButton;
