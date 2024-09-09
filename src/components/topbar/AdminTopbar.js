import React from "react";
import { Link } from "react-router-dom";
import "./admintopbar.css";

function Topbar() {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <Link to={'/'} style={{ textDecoration:'none' }}>
          <span className="logo">Easy Pick</span>
        </Link>
      </div>

      <div className="topBarCenter"></div>

      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">Profile</span>
          <span className="topBarLink">Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
