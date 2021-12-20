import React from "react";
import "./footer.css";
import Logo from "../../Assets/bayc-footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faDiscord,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
 
  return (
    <div className="footer">
      <hr />
      <div className="footer-content">
        <div className="input">
          <label style={{ color: "white" }}>Get on the list</label>
          <div className="btn">
            <input placeholder="Email Adress"></input>
            <button>Submit</button>
          </div>
        </div>
        <div className="footer-img">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-social">
          <div className="social-list-footer">
            <li>
              <FontAwesomeIcon icon={faFacebookF} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faDiscord} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
          </div>
          <p style={{color:"white",textAlign:"center"}}>&copy; all right reserved 2021</p>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
