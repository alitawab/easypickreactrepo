import React from "react";
import "./login.css";

function Login() {

  
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
              <input placeholder="Email" name="email" className="loginInput" />
              <input
                placeholder="Password"
                name="password"
                className="loginInput"
              />
              <button className="loginButton">Log In</button>
              <span className="loginForgot">Forgot Password</span>
            </form>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
