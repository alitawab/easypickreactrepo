import React from "react";
import "./pagecontent.css";
import AdminRoutes from "../adminroutes/AdminRoutes";

function PageContent() {
  return (
    <div className="pagecontentContainer">
      <div className="pagecontentWrapper">
        <AdminRoutes />
      </div>
    </div>
  );
}

export default PageContent;
