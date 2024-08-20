import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
function Click() {}
function SignUpForm() {
  return (
    <div className="login-form">
      <h2>Please Enter your Account details</h2>
      <form action="">
        <label htmlFor="">Full Name</label>
        <input type="text" placeholder="Full Name" name="" id="" required />
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Email" name="email" required />
        <label htmlFor="">Date of birth</label>
        <input
          type="date"
          placeholder="Date of birth"
          name="date"
          id=""
          required
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <label htmlFor="">Confirm passsword</label>
        <input
          type="password"
          name="password_confirm"
          placeholder="Confirm Password"
          id=""
          required
        />
      </form>
      <div className="forgot-password">
        <a href="#">Forgot Password</a>
      </div>
      <Link to="/home">
        <Button text="Sign Up" onclick="Click()" />
      </Link>
      <div className="create-account">
        <a href="../login">Already have an account</a>
      </div>
    </div>
  );
}

export default SignUpForm;
