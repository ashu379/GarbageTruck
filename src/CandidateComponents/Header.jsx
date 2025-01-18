import { React, useState } from "react";
import { Link } from "react-router-dom";
import Signup from "./SignUp";
import Login from "./Login";
import logo from "../media/Logo.png";
import logo2 from "../media/logo2.png";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const Header = () => {
  // const [isOpen, setOpen] = useState(false);
  // const toggleDrawer = () => {
  //   setOpen((prevState) => !prevState);
  // };

  return (
    <>
   
    <div className="top_nav">
      {/*     
      <button onClick={toggleDrawer}>Show</button>
     
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla bla bla"
      >
        <div className="nav" style={{ display: "block" }}>
          <div className="res_logo">
            <img src={logo2} alt="not work" />
          </div>
          <div>
            <Link to={"/"}>Home</Link>
          </div>
          <div>
            <Link to={"/Dashboard"}>Dashboard</Link>
          </div>
        </div>
        <span className="res_btn_nav">
          <Signup />
          <Login />
        </span>
      </Drawer> */}

      <span className="logo">
        <img src={logo2} alt="not work" />
      </span>
      <span className="right">
        <span className="nav">
          <span>
            <Link to={"/"}>Home</Link>
          </span>
          <span>
            <Link to={"/Dashboard"}>Dashboard</Link>
          </span>
          <span>
            <Link to={'/RecruiterDashboard'}>Recruiter Dashboard</Link>
          </span>
        </span>
        <span className="signUp_login_btn">
          <Signup />
          <Login />
        </span>
      </span>
    </div>
    </>
  );
};

export default Header;
