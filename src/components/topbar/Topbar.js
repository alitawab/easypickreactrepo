import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

function Topbar() {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className="logo">Easy Pick</span>
        </Link>
      </div>

      <div className="topBarCenter">
        <span className="topBarLink">Ride</span>
        <span className="topBarLink">Drive</span>
        <span className="topBarLink">Track</span>
        <span className="topBarLink">About</span>
      </div>

      <div className="topBarRight">
        <div className="topBarLinks">
          <Link className="topBarLink"  to={'/register'}>
            <span>SignUp</span>
          </Link>
          <Link className="topBarLink" to={'/login'}>
            <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
