import React from "react";
import "./register.css";

function Register() {

  const handleSubmit = () => {
    console.log("register");
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Ali Tawab</h3>
          <span className="loginDesc">Connect with world .</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <form className="loginBoxForm" onSubmit={handleSubmit}>
              <input
                name="username"
                placeholder="Username"
                className="loginInput"
              />
              <input name="email" placeholder="Email" className="loginInput" />
              <input name="phone" placeholder="Phone" className="loginInput" />
              <input
                name="password"
                placeholder="Password"
                className="loginInput"
              />
              <button className="loginButton">
                Sign Up
              </button>
              <button className="loginRegisterButton">Log into Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
