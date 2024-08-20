import React from "react";
import LoginForm from "./login/LoginForm";
import "../App.css";
import Navbar from "./navbar";
import Footer from "../components/footer/footer";
function Login() {
  return (
    <>
      <Navbar />
      <div className="login">
        <div className="login-container">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
