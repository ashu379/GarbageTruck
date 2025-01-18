import React from "react";
import Sidenav from "./Sidenav";
import ResumeUpload from "./ResumeUpload";

const Myresume = () => {
  return (
    <>
      <div className="header">
        <div className="header_child">
          <h2>My Resume</h2>
          
        </div>
      </div>

      <div className="dashboard_container">
        <Sidenav />

        <div className="right_side">
          <ResumeUpload />
        </div>
      </div>
    </>
  );
};

export default Myresume;
