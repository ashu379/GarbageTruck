import React from "react";
import Sidenav from "./Sidenav";
import { LuBaggageClaim } from "react-icons/lu";
import { BsListCheck } from "react-icons/bs";

const Dashboard = () => {
  return (
    <>
      <div className="header">
        <div className="header_child">
          <h2> Candidate Dashboard</h2>
        </div>
      </div>

      <div className="dashboard_container">
 
        <Sidenav />

        <div className="right_side">
          <span className="dashborad_header">
            <h3>Randall Henderson</h3>
          </span>

     
        
         <div className="dashboard_boxs">
            <div className="box" id="boxpostjobs">
              <span>
                <LuBaggageClaim size={75} className="candidate_icon" />
                <p>Post Jobs</p>
              </span>
              <span className="counter">
                <p>25</p>
              </span>
            </div>

            <div className="box" id="totalapplied">
              <span>
                <BsListCheck size={75} className="candidate_icon" />
                <p>Total Applied</p>
              </span>
              <span className="counter">
                <p>425</p>
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Dashboard;
