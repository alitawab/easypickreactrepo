import React from "react";
import "./driver.css";

function Driver() {
  return (
    <div className="drivermanagmentContainer">
    <div>
      <button style={{ marginBottom: "10px" }}>
        Create New Parent
      </button>
    </div>
      <table className="driverTable">
        <thead>
          <tr>
            <td>Driver Id</td>
            <td>Make</td>
            <td>Model</td>
            <td>Year</td>
            <td>Liscence</td>
            <td>Driver</td>
            <td>Status</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Toyota</td>
            <td>Camry</td>
            <td>2020</td>
            <td>[ABC 1234]</td>
            <td>Amjad</td>
            <td>Active</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Toyota</td>
            <td>Camry</td>
            <td>2020</td>
            <td>[ABC 1234]</td>
            <td>Amjad</td>
            <td>Active</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Toyota</td>
            <td>Camry</td>
            <td>2020</td>
            <td>[ABC 1234]</td>
            <td>Amjad</td>
            <td>Active</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Toyota</td>
            <td>Camry</td>
            <td>2020</td>
            <td>[ABC 1234]</td>
            <td>Amjad</td>
            <td>Active</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Driver;
