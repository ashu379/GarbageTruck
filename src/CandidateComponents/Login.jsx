import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaUserTie, FaBuilding } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
const Login = () => {
  const [show, setShow] = useState(false); // it is for popup
  const [activeDiv, setActiveDiv] = useState("first"); // default state to start with first div it is use for two form

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form data to API
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://garbagetruck.onrender.com/api/auth/login`, //Need to move this link in Enviroment variable for security Region
        formData
      );
      console.log("Response:", response.data);
      alert("Sign in successful!");
      setShow(false); // Close modal after successful signup
      const userData = response.data.user; // Extract the user data
      console.log("User data:", userData);

      // Store user data in local storage or state (for now, use localStorage)
      localStorage.setItem("user", JSON.stringify(userData));

      // Redirect to the dashboard
      // navigate("/Dashboard");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Sign in failed!");
    }
  };


  // in this code there two classname 1 candidate 2 Recruiter and there two form defferent user
  return (
    <>
      <Button className="login_btn click" onClick={handleShow}>
      <span>Login</span>  
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className="pop_header">
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <h2>Login</h2>
        </div>

        <Modal.Body>
          <div>
            <div className="toggle-divs">
              <div className="buttons" id="login_button">
                <button
                  onClick={() => setActiveDiv("first")}
                  className={activeDiv === "first" ? "active" : ""}
                >
                  <FaUserTie /> Candidate
                </button>
                <button
                  onClick={() => setActiveDiv("second")}
                  className={activeDiv === "second" ? "active" : ""}
                >
                  <FaBuilding /> Recruiter
                </button>
              </div>

              <section className="content">
                {activeDiv === "first" && (
                  <div className="first-div">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="password"
                        name="password"
                        placeholder="Password*"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <span>
                        <input type="checkbox" id="checkbox" />
                        <p>Remember me</p>
                        <Link>Forgot Password</Link>
                      </span>
                      <Button type="submit" className="slide_button">Log in</Button>
                    </form>
                    <p className="or">OR</p>
                    <div className="signup_bottom_link">
                      <div className="auth-buttons">
                        <button className="auth-button google">
                          <FcGoogle className="icon" /> Continue with Google
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeDiv === "second" && (
                  <div className="second-div">
                    <form action="">
                      <input type="text" placeholder="Fullname*" required />
                      <input type="password" placeholder="Password*" required />
                      <span>
                        <input type="checkbox" id="checkbox" required />
                        <p>Remember me</p>
                        <Link>Forgot Password</Link>
                      </span>
                      <Button  type="submit" className="slide_button">
                        Log in
                      </Button>
                    </form>
                    <p className="or">OR</p>
                    <div className="signup_bottom_link">
                      <div className="auth-buttons">
                        <button className="auth-button google">
                          <FcGoogle className="icon" /> Continue with Google
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
