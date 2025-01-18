import React from "react";

import { FaLocationDot, FaWallet } from "react-icons/fa6";
import { FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";
import img from "../media/image.png";

const JobCard = ({
  rating,
  title,
  company,
  description,
  location,
  salary,
  workType,
  datePosted,
}) => {
  return (
    <div className="job-card">
      <div className="job-header">
        <div className="rating">{rating}</div>
        <span className="company">by {company}</span>
      </div>
      <h2 className="job-title">{title}</h2>
      <p className="job-description">{description}</p>
      <div className="flex-3s">
        <div class="avatar-group">
          <img src={img} alt="Person 1" class="avatar" />
          <img src={img} alt="Person 2" class="avatar" />
          <img src={img} alt="Person 3" class="avatar" />
          <img src={img} alt="Person 4" class="avatar" />
        </div>
        <a href="#" className="see-applicants">
          See all applicants <FaExternalLinkAlt />
        </a>
      </div>

      <div className="job-info">
        <div className="info-item">
          <div className="info-detail">
            <span className="icon">
              <FaLocationDot />
            </span>
            <span className="info-label">Location</span>
          </div>
          <div className="info-value"> {location} </div>
        </div>
        <div className="info-item">
          <div className="info-detail">
            <span className="icon">
              <FaWallet />
            </span>
            <span className="info-label">Salary</span>
          </div>
          <div className="info-value"> ${salary} / month </div>
        </div>
        <div className="info-item">
          <div className="info-detail">
            <span className="icon">
              <FaBriefcase />
            </span>
            <span className="info-label">How Work</span>
          </div>
          <div className="info-value"> {workType} </div>
        </div>
      </div>

      <div className="footer">
        <span className="date-posted">Posted: {datePosted}</span>
        <button className="apply-button">Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;
