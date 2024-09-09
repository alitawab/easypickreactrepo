import React from "react";
import "./adminroutes.css";
import { Route, Routes } from "react-router-dom";
import RouteManagment from "../../pages/admin/routemanagment/RouteManagment";
import Parent from "../../pages/admin/usermanagment/parent/Parent";
import Driver from "../../pages/admin/usermanagment/driver/Driver";
import VehicleManagment from "../../pages/admin/vehiclemanagment/VehicleManagment";
import Settings from "../../pages/admin/settings/Settings";
import SubscriptionManagment from "../../pages/admin/subscriptionmanagment/SubscriptionManagment"
import ModeratorManagment from "../../pages/admin/moderatormanagment/ModeratorManagment"
import Admin from "../../pages/admin/Admin";

function AdminRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/admin/" element={ <Admin/> }/>
        <Route path="/admin/parent-managment" element={<Parent />} />
        <Route path="/admin/student-managment" />
        <Route path="/admin/driver-managment" element={<Driver />} />
        <Route path="/admin/route-managment" element={<RouteManagment />} />
        <Route path="/admin/vehicle-managment" element={<VehicleManagment/>}/>
        <Route path="/admin/subscription-managment" element={ <SubscriptionManagment /> } />
        <Route path="/admin/moderator-managment" element={<ModeratorManagment />} />
        <Route path="/admin/cupon-managment" />
        <Route path="/admin/settings" element={<Settings/>} />
      </Routes>
    </div>
  );
}

export default AdminRoutes;
