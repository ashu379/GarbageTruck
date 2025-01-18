import React, { useState } from "react";
import RecruiterSidenave from './RecruiterSidenave'

const RecruiterChangePassword = () => {

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle password change logic here
    };
   
  return (
    <>
      <div className="header">
        <div className="header_child">
          <h2>Company Change Password</h2>      
        </div>
      </div>
      <div className="dashboard_container">
        <RecruiterSidenave/>

        <div  className="right_side">

        <div className="change-password-container">
          <h3>Change Password</h3>
          <form onSubmit={handleSubmit}>
            <div className="password_group">
              <span className="password_box">
                <label>Old Password</label>
               
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
              </span>

              <span className="password_box">
                <label>New Password</label>
                
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </span>
            </div>
            <div className="password_group full-width">
              <span>
                <label>Confirm New Password</label>
              
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </span>
            </div>
            <button type="submit">Save Changes</button>
          </form>
        </div>

        </div>
      </div>
    </>
  )
}

export default RecruiterChangePassword