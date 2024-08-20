import React from "react";
import Button from "./Button";

function LoginForm() {
  return (
    <div className="login-form">
      <h2>Please Enter your Account details</h2>
      <input type="email" placeholder="Email" value="Johndoe@gmail.com" />
      <input type="password" placeholder="Password" value="********" />
      <div className="forgot-password">
        <a href="#">Forgot Password</a>
      </div>
      <Button text="Sign in" />
      <div className="create-account">
        <a href="../signup">Create an account</a>
      </div>
    </div>
  );
}

export default LoginForm;
