import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCode } from "@fortawesome/free-solid-svg-icons";
import "../footer/footer.css";
import {
  FiPhoneCall,
  FiMail,
  FiYoutube,
  FiTwitter,
  FiFacebook,
} from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import foterLogo from "../../../images/GEOFFREY1.png";

const codeIcon = <FontAwesomeIcon color="blue" icon={faCode} />;
const heartIcon = <FontAwesomeIcon color="red" icon={faHeart} />;

const Footer = ({ darkMode }) => {
  return (
    <div className={darkMode ? "footer-dark" : "footer"}>
      <div className="footer-main">
        <div className="footer-logo-cont">
          <img className="footer-logo" src={foterLogo} alt="" />
        </div>
        <div className="footer-menu">
          <div className="menu-item">
            <p className="menu-item-header">Quick Links</p>
            <ul>
              <li>
                <a target="_blank" href="https://geoffrey.hashnode.dev/">
                  {" "}
                  Blog
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/14FKIJGYErPi41xPlwxdbsOJCpnLaZTpF/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/geoffrey1330">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="menu-item">
            <p className="menu-item-header">Socials</p>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/geoffrey-israel-chinedu-87b4b1191/"
                >
                  <FaLinkedinIn />
                  Linkedin
                </a>
              </li>
              <li>
                <a target="_blank" href="">
                  <FaInstagram />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/israel.geoffrey.56"
                >
                  <FiFacebook />
                  Facebook
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/IsraelGeoffrey1">
                  <FiTwitter />
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="menu-item">
            <p className="menu-item-header">Contact</p>
            <ul>
              <li>
                <FiMail />
                israelgeoffrey13@gmail.com
              </li>
              <li>
                <a target="_blank">
                  <FiPhoneCall />
                  +234 8146 393754
                </a>
              </li>
              <li>
                <a target="_blank" href="https://wa.me/2348146393754/">
                  <FaWhatsapp />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
