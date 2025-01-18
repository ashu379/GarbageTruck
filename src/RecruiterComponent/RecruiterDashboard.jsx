import React from "react";
import RecruiterSidenave from "./RecruiterSidenave";
import {
  FaBuilding,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaEarthAmericas,
  FaCity,
  FaMapPin,
  FaLocationDot,
  FaUser,
} from "react-icons/fa"; // Importing React Icons
import { LuAtSign } from "react-icons/lu";
import { FaEarthAfrica } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";

const RecruiterDashboard = () => {
  return (
    <>
      <div className="header">
        <div className="header_child">
          <h2>Company Profile</h2>
        </div>
      </div>
     
      <div className="dashboard_container">
        <RecruiterSidenave />

        <div className="right_side">
          <form>
            <div className="responsive-form">
              <div className="form-group">
                <label>Company Name</label>
                <div className="input-container">
                  <FaBuilding className="icons" />
                  <input type="text" placeholder="Company Name" />
                </div>
              </div>

              <div className="form-group">
                <label>Recruiter Name</label>
                <div className="input-container">
                  <FaUser className="icons" />
                  <input type="text" placeholder="Recruiter Name" />
                </div>
              </div>
              <div className="form-group">
                <label>Phone</label>
                <div className="input-container">
                  <FaPhone className="icons" />
                  <input type="123" placeholder="(251) 1234-456-7890" />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <div className="input-container">
                  <LuAtSign className="icons" />
                  <input type="text" placeholder="Devid Smith" />
                </div>
              </div>

              <div className="form-group">
                <label>Website</label>
                <div className="input-container">
                  <FaGlobe className="icons" />
                  <input type="text" placeholder="https://example.com" />
                </div>
              </div>
              <div className="form-group">
                <label>Country</label>
                <div className="input-container">
                  <FaEarthAfrica className="icons" />
                  <input type="text" placeholder="Devid Smith" />
                </div>
              </div>
              <div className="form-group">
                <label>City</label>
                <div className="input-container">
                  <FaEarthAfrica className="icons" />
                  <input type="text" placeholder="Devid Smith" />
                </div>
              </div>
              <div className="form-group">
                <label>Pin Code</label>
                <div className="input-container">
                  <FaMapPin className="icons" />
                  <input type="123" placeholder="7546" />
                </div>
              </div>
            </div>

            <div className="form-group fuAD">
              <label>Full Address</label>
              <div className="input-container">
                <IoLocation className="icons" />
                <input
                 
                  type="text"
                  placeholder="1363-1385 Sunset Blvd Angeles, CA 90026 ,USA"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <div>
                <textarea className="input-container" type="text" />
              </div>
            </div>
            <button type="submit">Save Change</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecruiterDashboard;
