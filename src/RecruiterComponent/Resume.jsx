import React from "react";
import RecruiterSidenave from "./RecruiterSidenave";
import CandidateList from "./CandidateList";

// this component for comapny side resume

const Resume = () => {
  return (
    <>
      <div className="header">
        <div className="header_child">
          <h2>Company Resume</h2>
        </div>
      </div>
      <div className="dashboard_container"> 
        <RecruiterSidenave />

        <div className="right_side">
          <CandidateList />
        </div>
      </div>
    </>
  );
};

export default Resume;
