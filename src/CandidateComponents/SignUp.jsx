
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaUserTie, FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";

function Signup() {
  const [show, setShow] = useState(false); // it is for popup

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // Form fields state
  const [formData, setFormData] = useState({
    fullname: "",
    password: "",
    email: "",
    phone: "",
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
         `https://garbagetruck.onrender.com/api/candidates`, //Need to move this link in Enviroment variable for security Region
        formData
      );
      console.log("Response:", response.data);
      alert("Sign up successful!");
      setShow(false); // Close modal after successful signup
      
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Sign up failed!");
    }
  };

  const [activeDiv, setActiveDiv] = useState("first"); // default state to start with first div it is use for two form

  // in this code there two classname 1 candidate 2 Recruiter and there two form defferent user

  return (
    <>
      <Button className="sign_btn blur_click" onClick={handleShow}>
       <span>SignUp</span> 
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
          <h2>Sign Up</h2>
        </div>

        <h6>Sign Up and get access to all features</h6>
        <Modal.Body>
          <div>
            <div className="toggle-divs">
              <div className="buttons">
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
                        type="text"
                        name="fullname"
                        placeholder="Fullname*"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                      />
                    
                      <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone*"
                        value={formData.phone}
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
                        <input type="checkbox" id="checkbox" required />
                        <p>I agree to the</p>
                        <Link to={'/TermCondition'}>Terms & Conditions</Link>
                        <br />
                        <p className="already_para">Already registered?</p>
                        <Link>Log in here</Link>
                      </span>
                      <Button type="submit" className="slide_button">Sign up</Button>
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
                      <input type="email" placeholder="Email*" required />
                      <input type="text" placeholder="Phone*" required />
                      <input type="password" placeholder="Password*" required />
                      <span>
                        <input type="checkbox" id="checkbox" required />
                        <p>I agree to the</p>
                  
                        <Link to={'/TermCondition'}>Terms & Conditions</Link>
                        <br />
                        <p className="already_para">Already registered?</p>
                        <Link>Log in here</Link>
                      </span>
                      <Button type="submit" className="slide_button">Sign in</Button>
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
      </Modal>
    </>
  );
}

export default Signup;
  