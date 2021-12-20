import React from "react";
import "./landingpage.css";
import Bayc from "../Assets/bayc-logo.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF,faInstagram,faDiscord,faTwitter } from '@fortawesome/free-brands-svg-icons';


function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-page-container">
        <div className="logo-social-container">
          <img src={Bayc} alt="Bayc-Logo" />
        </div>
      
      </div>
    </div>
  );
}

export default LandingPage;
