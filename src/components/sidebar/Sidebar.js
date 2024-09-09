import React from "react";
import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const valueselected = (event) => {
    navigate(event.target.value);

  }
  
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarHeading">
          <span className="sidebarHeadingText">Dashboard</span>
        </div>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <select id="dropdown" className="sidebarListItemDropDown" onChange={valueselected}>
              <option defaultValue="User Managment">User Managment</option>
              <option value="/admin/parent-managment">Parents</option>
              <option value="/admin/driver-managment">Drivers</option>
              <option>Students</option>
            </select>
          </li>
          <li className="sidebarListItem">
            <Link className="sidebarListItemLink" to={"/admin/route-managment"}>
              <span className="sidebarListItemText">Route Managment</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="sidebarListItemLink" to={"/admin/vehicle-managment"}>
              <span className="sidebarListItemText">Vehicle Managment</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="sidebarListItemLink" to={"/admin/subscription-managment"}>
              <span className="sidebarListItemText">Subscription Managment</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="sidebarListItemLink" to={"/admin/moderator-managment"}>
              <span className="sidebarListItemText">Moderator Managment</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="sidebarListItemLink">
              <span className="sidebarListItemText">Cupon Managment</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="sidebarListItemLink">
              <span className="sidebarListItemText">Reports & Analytics</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="sidebarListItemLink" to={'/admin/settings'}>
              <span className="sidebarListItemText">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
