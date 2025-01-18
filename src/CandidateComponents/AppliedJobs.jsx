import React from "react";
import Sidenav from "./Sidenav";
import JobListing from "./JobListing";

const AppliedJobs = () => {


  return (
    <>
      <div className="header">
          <div className="header_child">
            <h2>Applied Job</h2>
            
          </div>
        </div>
        

  
        <div className="dashboard_container">
        <Sidenav />

        <div className="right_side">

        
          <h4>Applied 250 jobs</h4>  
       
        <JobListing 
        title="Sr. Rolling Stock Technician"
        company="https://thewebmax.com"
        location="1363-1385 Sunset Blvd Los Angeles, CA 90026, USA"
        url="https://thewebmax.com"
        type="Internship"
        salary="2500"
        date="15 days"
      />
        <JobListing 
        title="Sr. Rolling Stock Technician"
        company="https://thewebmax.com"
        location="1363-1385 Sunset Blvd Los Angeles, CA 90026, USA"
        url="https://thewebmax.com"
        type="Internship"
        salary="2500"
        date="15 days"
      />
          </div>

        
             
        </div>
    </>
  );
};

export default AppliedJobs;
