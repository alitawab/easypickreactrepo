import React from "react";
import {
  Facebook,
  Instagram,
  Language,
  LinkedIn,
  LocationOn,
  Twitter,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerLeft">
        <div className="footerLeftTop">
          <IconButton className="footerLeftTopIcon" href="www.facebook.com">
            <Facebook />
          </IconButton>
          <IconButton className="footerLeftTopIcon" href="www.twitter.com">
            <Twitter />
          </IconButton>
          <IconButton className="footerLeftTopIcon" href="www.instagram.com ">
            <Instagram />
          </IconButton>
          <IconButton className="footerLeftTopIcon" href="www.linkedin.com">
            <LinkedIn />
          </IconButton>
        </div>

        <div className="footerLeftBottom">
          <span className="footerLeftBottomText">
            © 2024 Easy Pick Technologies Inc.
          </span>
        </div>
      </div>

      <div className="footerRight">
        <div className="footerRightTop">
          <IconButton className="footerRightTopIcon">
            <Language />
            <select>
              <option className="footerRightTopIconText">English</option>
              <option className="footerRightTopIconText">Urdu</option>
            </select>
          </IconButton>
          <IconButton className="footerRightTopIcon">
            <LocationOn />
            <select>
              <option className="footerRightTopIconText">Lahore</option>
              <option className="footerRightTopIconText">Islamabad</option>
            </select>
          </IconButton>
        </div>
        
        <div className="footerRightBottom">
        <Link to={'/accessibility'} className="footerRightBottomLink" >
          <span className="footerRightBottomText">Accessibility</span>
        </Link>
        <Link to={'/privacypolicy'} className="footerRightBottomLink">
          <span className="footerRightBottomText">Privacy Policy</span>
        </Link>
        <Link to={'/terms'} className="footerRightBottomLink">
          <span className="footerRightBottomText">Terms</span>
        </Link>
        </div>

      </div>
    </div>
  );
}

export default Footer;
