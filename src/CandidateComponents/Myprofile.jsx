import React from "react";
import Sidenav from "./Sidenav";
import RegistrationSection from "./RegistrationSection";

const Myprofile = () => {
  return (
    <>
      <div className="header">
        <div className="header_child">
          <h2>My Profile</h2>
        </div>
      </div>
      <div className="dashboard_container">
        <Sidenav />
        <div className="right_side">
          <RegistrationSection />
        </div>
      </div>
    </>
  );
};

export default Myprofile;
