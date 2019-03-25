import React from "react";
import { Link } from "react-router-dom";

const Login = () => (
  <div className="login-container">
    <div className="login-fields">
      <input id="fieldEmail" type="email" placeholder="Email"/>

      <input id="fieldPassword" type="password" placeholder="Password"/>

      <button id="btnLogin" className="btn-Login">Log in</button>

      <button id="btnSignup" className="btn-Signup">Sign up</button>

      </div>
  </div>
);

export default Login;
