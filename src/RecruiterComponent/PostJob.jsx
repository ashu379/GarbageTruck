import React from "react";
import {
  FaAddressCard,
  FaBorderAll,
  FaFileAlt,
  FaMapMarkerAlt,
  FaMapPin,
  FaUserGraduate,
  FaVenusMars,
} from "react-icons/fa";
import RecruiterSidenave from "./RecruiterSidenave";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaEarthAfrica, FaUserPen } from "react-icons/fa6";

const PostJob = () => {
  return (
    <>
      <div className="header">
        <div className="header_child">
          <h2>Company Post A Job</h2>
        </div>
      </div>
      <div className="dashboard_container">
        <RecruiterSidenave />
        <div className="right_side">
          <form>
            <div className="post_job_form_container">
              <div className="postjobform_row1">
                <div className="form-group post_formbox">
                  <label>Job Titla</label>
                  <div className="input-container">
                    <span>
                      {" "}
                      <FaAddressCard className="icons" />
                    </span>
                    <input type="text" placeholder="Company Name" />
                  </div>
                </div>
                <div className="form-group post_formbox">
                  <label>Job Category</label>
                  <div className="input-container">
                    <span>
                      <FaBorderAll className="icons" />
                    </span>
                    <select name="category">
                      <option>Select Category</option>
                      <option>Driving</option>
                      <option>Web development</option>
                      <option>Design</option>
                      <option>Finance</option>
                      <option>Healthcare</option>
                    </select>
                  </div>
                </div>
                <div className="form-group post_formbox">
                  <label>Phone</label>
                  <div className="input-container">
                    <span>
                      <FaFileAlt className="icons" />
                    </span>
                    <select name="category">
                      <option>Select Type</option>
                      <option>Full Time</option>
                      <option>Freelance</option>
                      <option>Part Time</option>
                      <option>Internship</option>
                      <option>Temporary</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="postjobform_row1">
                <div className="form-group post_formbox">
                  <label>Offeren Salary</label>
                  <div className="input-container">
                    <span>
                      {" "}
                      <BsCurrencyDollar className="icons" />
                    </span>
                    <input type="text" placeholder="Salary" />
                  </div>
                </div>
                <div className="form-group post_formbox">
                  <label>Experience</label>
                  <div className="input-container">
                    <span>
                      <FaUserPen className="icons" />
                    </span>
                    <input type="text" placeholder="Experience" />
                  </div>
                </div>
                <div className="form-group post_formbox">
                  <label>Qualification</label>
                  <div className="input-container">
                    <span>
                      <FaUserGraduate className="icons" />
                    </span>
                    <input type="123" placeholder="Qualification" />
                  </div>
                </div>
              </div>

              <div className="postjobform_row1">
                <div className="form-group post_formbox">
                  <label>Gender</label>
                  <div className="input-container">
                    <span>
                      {" "}
                      <FaVenusMars className="icons" />
                    </span>
                    <select name="Gender">
                      <option>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>
                <div className="form-group post_formbox">
                  <label>Country</label>
                  <div className="input-container">
                    <span>
                      <FaEarthAfrica className="icons" />
                    </span>
                    <input type="text" placeholder="Country" />
                  </div>
                </div>
                <div className="form-group post_formbox">
                  <label>City</label>
                  <div className="input-container">
                    <span>
                      <FaMapMarkerAlt className="icons" />
                    </span>
                    <input type="123" placeholder="City" />
                  </div>
                </div>
              </div>

              <div className="postjobform_row1">
                <div className="form-group post_formbox">
                  <label>Email Address</label>
                  <div className="input-container">
                    <span>
                      {" "}
                      <FaMapMarkerAlt className="icons" />
                    </span>
                    <input type="email" placeholder="David@gmail.com" />
                  </div>
                </div>
                <div className="form-group post_formbox">
                  <label>Website</label>
                  <div className="input-container">
                    <span>
                      <FaMapPin className="icons" />
                    </span>
                    <input type="text" placeholder="https://..." />
                  </div>
                </div>
                <div className="form-group post_formbox">
                  <label>Est. Since</label>
                  <div className="input-container">
                    <span>
                      <FaMapPin className="icons" />
                    </span>
                    <input type="text" placeholder="Since" />
                  </div>
                </div>
              </div>

              <div className="postjobform_row1">
                <div className="form-group post_formbox">
                  <label>Location</label>
                  <div className="input-container">
                    <span>
                      {" "}
                      <FaMapMarkerAlt className="icons" />
                    </span>
                    <input type="123" placeholder="Type Address" />
                  </div>
                </div>
                <div className="form-group post_formbox">
                  <label>Latitude</label>
                  <div className="input-container">
                    <span>
                      <FaMapPin className="icons" />
                    </span>
                    <input type="text" placeholder="Los Angeles" />
                  </div>
                </div>
                <div className="form-group post_formbox">
                  <label>Logntitude</label>
                  <div className="input-container">
                    <span>
                      <FaMapPin className="icons" />
                    </span>
                    <input type="123" placeholder="Los Angeles" />
                  </div>
                </div>
              </div>

              <div className="form-row full-width">
              <input type="123" placeholder="" />
              </div>

              <div className="form-row full-width">
                <textarea
                  name="description"
                  className="input"
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostJob;
