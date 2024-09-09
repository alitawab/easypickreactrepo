import React from "react";
import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import AboutUs from "../../components/aboutus/AboutUs";

function Home() {
  const handleSubmit = () =>{
    console.log("submit");
  }
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <div className="homeContainerWrapper">
          <div className="homeContainerLeft">
            <div className="homeContainerLeftTop">
              <span className="homeContainerLeftTopTitle">
                Easy <span style={{ color: "#FFBF00" }}>Pick</span>
              </span>
            </div>

            <div className="homeContainerLeftBottom">
              <form className="searchBoxForm" onSubmit={handleSubmit}>
                <input
                  placeholder="Pickup Address"
                  name="pickup-address"
                  className="searchInput"
                />
                <input
                  placeholder="Drop/Institute Address"
                  name="institute-address"
                  className="searchInput"
                />
                <button className="searchButton">Search</button>
              </form>
            </div>
          </div>

          <div className="homeContainerRight">
            <img className="indexPageImg" src="assets/bus.png" alt="" />
          </div>
        </div>
      </div>
      <AboutUs/>
      <Footer />
    </div>
  );
}

export default Home;
