import React from "react";
import { NavLink } from "react-router-dom";
import ImageUpload from "../CandidateComponents/ImageUpload";
import {
  FaUser,
  FaCreditCard,
  FaUserCheck,
  FaShareSquare,
} from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { IoMdFingerPrint } from "react-icons/io";
import { FaBookOpenReader } from "react-icons/fa6";

const RecruiterSidenave = () => {
  return (
    <>
      <div className="sidebar recruiter-sidebar">
        <div className="upload_section">
          <ImageUpload />
        </div>

        <div className="sidebar_header_section">
          <h3>XYZ COMPANY</h3>
        </div>

        <nav
          className="sidebar__nav"
          style={{ color: "border:1px solid white" }}
        >
          <ul>
            <NavLink
              to="/RecruiterDashboard"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              <li>
                <FaUser className="icons" /> Company Profile
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              to={"/Resume"}
            >
              <li>
                <PiNewspaperClippingLight className="icons" />
                Resume
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              to={"/Managejob"}
            >
              <li>
                <FiShoppingBag className="icons" />
                Manage Jobs
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              to={"/Postjob"}
            >
              <li>
                <FaBookOpenReader className="icons" />
                Post a job
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              to={"/Transaction"}
            >
              <li>
                <FaCreditCard className="icons" />
                Transaction
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              to={"/BrowserCandidate"}
            >
              <li>
                <FaUserCheck className="icons" />
                Browser Candidate
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              to={"/RecruiterChangePassword"}
            >
              <li>
                <IoMdFingerPrint className="icons" />
                Change Password
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              to={"/ChangePassword"}
            >
              <li>
                <FaShareSquare className="icons" />
                Logout
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default RecruiterSidenave;
