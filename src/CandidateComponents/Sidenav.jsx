import React from "react";
import {  NavLink } from "react-router-dom";
import ImageUpload from "./ImageUpload";
import { FaUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { IoMdFingerPrint } from "react-icons/io";
import { AiFillDashboard } from "react-icons/ai";

const Sidenav = () => {
  return (
    <>
      <div className="sidebar">
        <div className="upload_section">
          <ImageUpload />
        </div>

        <div className="sidebar_header_section">
          <h3>Garbage Truck</h3>
        </div>

        <nav
          className="sidebar__nav"
          style={{ color: "border:1px solid white" }}
        >
          <ul>
             <NavLink  to="/dashboard"
             className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
              >
            <li>
              <AiFillDashboard className="icons" />
             Dashboard     
             
            </li>
            </NavLink> 
            <NavLink 
            className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
             to={"/Myprofile"}>
            <li>
              <FaUser className="icons" />{" "}
            My Profile
            </li>
            </ NavLink>
            <NavLink 
            className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
            to={"/AppliedJobs"}>
            <li>
              <FiShoppingBag className="icons" />
             Applied Jobs
            </li>
            </NavLink>
            <NavLink 
            className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
            to={"/Myresume"}>
            <li>
              <PiNewspaperClippingLight className="icons" />
              My Resume
            </li>
            </NavLink>
            <NavLink
            className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
            to={"/ChangePassword"}>
            <li>
              <IoMdFingerPrint className="icons" />
              Change Password
            </li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
