import React from "react";
import './admin.css'
import AdminTopbar from "../../components/topbar/AdminTopbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import PageContent from "../../components/pagecontent/PageContent";

function Admin() {
  return (
    <>
      <AdminTopbar />
      <div className="adminContainer">
        <Sidebar />
        <PageContent />
      </div>
      <Footer />
    </>
  );
}

export default Admin;
