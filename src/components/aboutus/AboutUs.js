import React from "react";
import "./aboutus.css";

function AboutUs() {
 return (
    <div className="aboutus">
      <section className="about-us" id="about-us">
        <div className="about-us-container">
          <h2 className="about-us-title">About Us</h2>
          <p className="about-us-description">
            We are a team of passionate individuals dedicated to providing the
            best service possible. Our mission is to make a positive impact
            through our work and to build lasting relationships with our
            clients.
          </p>
          <div className="about-us-team">
            <div className="team-member">
              <img
                src="team-member1.jpg"
                alt="Team Member 1"
                className="team-member-image"
              />
              <h3 className="team-member-name">John Doe</h3>
              <p className="team-member-role">CEO</p>
            </div>
            <div className="team-member">
              <img
                src="team-member2.jpg"
                alt="Team Member 2"
                className="team-member-image"
              />
              <h3 className="team-member-name">Jane Smith</h3>
              <p className="team-member-role">CTO</p>
            </div>
            {/* Add more team members as needed */}
          </div>
          <div className="about-us-cta">
            <p>
              Want to know more about us? Feel free to{" "}
              <a href="/contact">contact us</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
