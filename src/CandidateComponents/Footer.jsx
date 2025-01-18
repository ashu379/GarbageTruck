import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Logo from "../media/logo2.png";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        {/* Section 1: Logo and Social Media */}
        <div className="footer-section footer_left">
          <div className="footer-logo">
            <img src={Logo} alt="Company Logo" className="logo" />
          </div>
          <p>Connect with us</p>
          <div className="footer-social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </div>

        {/* Section 2: Company Links */}
        <div className="footer-section">
          <h4>Company</h4>
          <Link to="/about">About us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/employer">Employer home</Link>
          <Link to="/sitemap">Sitemap</Link>
          <Link to="/credits">Credits</Link>
        </div>

        {/* Section 3: Support Links */}
        <div className="footer-section" style={{ marginBottom: "2.7rem" }}>
          <h4>Support</h4>
          <Link to="/help-center">Help center</Link>
          <Link to="/summons">Summons/Notices</Link>
          <Link to="/grievances">Grievances</Link>
          <Link to="/report-issue">Report issue</Link>
        </div>

        {/* Section 4: Legal Links */}
        <div className="footer-section" style={{ marginBottom: "2.7rem" }}>
          <h4 >Legal</h4>
          <Link to="/privacy-policy" >Privacy policy</Link>
          <Link to="/TermCondition">Terms & conditions</Link>
          <Link to="/fraud-alert">Fraud alert</Link>
          <Link to="/trust-safety">Trust & safety</Link>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
