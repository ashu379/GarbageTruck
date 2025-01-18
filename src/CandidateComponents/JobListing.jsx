import React from 'react';


const JobListing = ({ title, company, location, url, type, salary, date }) => {
  return (
    <div className="job-listing">
      <div className="job-image">124 x 124</div>
      <div className="job-details">
        <h3 className="job-title">{title}</h3>
        <p className="job-date">{date} ago</p>
        <p className="job-location">{location}</p>
        <a href={url} className="job-company">{company}</a>   
      </div>
      <div className="right_apply_box">
      <p className="job-salary">${salary} / Month</p>
      <span className={`job-type ${type === 'New' ? 'new' : 'internship'}`}>{type}</span>
      <button className="apply-button">Apply Job</button>
      </div>
    </div>
  );
};

export default JobListing;
