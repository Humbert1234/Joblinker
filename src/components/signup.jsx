import React from "react";
import SignUpForm from "./Sign up/SignUpForm";
import "../App.css";
import Navbar from "./navbar";
import Footer from "../components/footer/footer";
function Signup() {
  return (
    <>
      <Navbar />
      <div className="login">
        <div className="login-container">
          <SignUpForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
