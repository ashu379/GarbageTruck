import React from "react";
import { FaUser, FaMapPin, FaAt, FaUserGraduate } from "react-icons/fa";
import { LuAtSign } from "react-icons/lu";
import { FaEarthAfrica, FaEarthAmericas } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";


const RegistrationSection = () => {
 

  return (
    <div className="form-container">
      <h2>Basic Informations</h2>
      <form>
            <div className="responsive-form">
              <div className="form-group">
                <label>Your Name</label>
                <div className="input-container">
                <FaUser className="icons"/>
                  <input type="text" placeholder="Company Name" />
                </div>
              </div>

              <div className="form-group">
                <label>Phone</label>
                <div className="input-container">
                <IoCall className="icons"/>
                  <input type="text" placeholder="808080..." />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <div className="input-container">
                <FaAt className="icons"/>
                  <input type="123" placeholder="(251) 1234-456-7890" />
                </div>
              </div>
              <div className="form-group">
                <label>Website</label>
                <div className="input-container">
                <FaEarthAmericas className="icons"/>
                  <input type="text" placeholder="https://" />
                </div>
              </div>

              <div className="form-group">
                <label>Qualification</label>
                <div className="input-container">
                <FaUserGraduate className="icons"/>
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
  );
};

export default RegistrationSection;
