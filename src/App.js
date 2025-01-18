import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChangePassword from "./CandidateComponents/ChangePassword";
import AppliedJobs from "./CandidateComponents/AppliedJobs";
import Sidenav from "./CandidateComponents/Sidenav";
import Home from "./CandidateComponents/Home";
import ImageUpload from "./CandidateComponents/ImageUpload";
import Myprofile from "./CandidateComponents/Myprofile";
import Myresume from "./CandidateComponents/Myresume";
import Dashboard from "./CandidateComponents/Dashboard";
import RegistrationSection from "./CandidateComponents/RegistrationSection";
import ResumeUpload from "./CandidateComponents/ResumeUpload";
import Signup from "./CandidateComponents/SignUp";
import Login from "./CandidateComponents/Login";
import Header from "./CandidateComponents/Header";
import TermCondition from "./CandidateComponents/TermCondition";
import RecruiterDashboard from "./RecruiterComponent/RecruiterDashboard";
import RecruiterSidenave from "./RecruiterComponent/RecruiterSidenave";
import CandidateCard from "./RecruiterComponent/CandidateCard";
import CandidateList from "./RecruiterComponent/CandidateList";
import Resume from "./RecruiterComponent/Resume";
import ManageJob from "./RecruiterComponent/ManageJob";
import PostJob from "./RecruiterComponent/PostJob";
import Transaction from "./RecruiterComponent/Transaction";
import BrowserCandidate from "./RecruiterComponent/BrowserCandidate";
import TransactionList from "./RecruiterComponent/TransactionList";
import RecruiterChangePassword from "./RecruiterComponent/RecruiterChangePassword";
import SearchJob from "./CandidateComponents/SearchJob";
import Filter from "./CandidateComponents/Filter";
import Preloader from "./CandidateComponents/Preloader"; 
import Footer from "./CandidateComponents/Footer";

// top side all jsx CandidateComponents ↑ ↑ ↑ ↑


// bottom side all sass files  ↓ ↓ ↓ ↓

import "./CandidateStyle/App.scss";
import "./CandidateStyle/colors.scss";
import "./CandidateStyle/header.scss";
import "./CandidateStyle/home.scss";
import "./CandidateStyle/candidate.scss";
import "./CandidateStyle/sidebar.scss";
import "./CandidateStyle/ImageUpload.scss";
import "./CandidateStyle/RegistrationSection.scss";
import "./CandidateStyle/dashboard.scss";
import "./CandidateStyle/ResumeUpload.scss";
import "./CandidateStyle/Signup.scss";
import "./CandidateStyle/Login.scss";
import "./CandidateStyle/ChangePassword.scss";
import "./CandidateStyle/Footer.scss";
import "./CandidateStyle/JobListing.scss";
import "./CandidateStyle/Myprofile.scss";
import "./CandidateStyle/AppliedJobs.scss";
import "./CandidateStyle/Preloader.scss";
import "./CandidateStyle/Lower.scss";
import "./CandidateStyle/Counter.scss";
import "./CandidateStyle/Dustbin.scss";
import "./CandidateStyle/HomePage.scss";
import "./CandidateStyle/TestimonialSlider.scss";
import "./CandidateStyle/JobSearch.scss";
import "./CandidateStyle/TermsCondition.scss";
import "./CandidateStyle/Jobcard.scss";
import "./CandidateStyle/CandidateCard.scss";
import "./RecruiterStyle/RecruiterDashboard.scss";
import "./RecruiterStyle/TransactionList.scss";
import "./RecruiterStyle/PostJob.scss";
import "./RecruiterStyle/Filter.scss";
import "./RecruiterStyle/BrowserCandidate.scss";
import "./CandidateStyle/SearchJob.scss";


function App() {
  const [loading, setLoading] = useState(true); // Initial loading state

  useEffect(() => {
    // Simulating a delay for the preloader
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 3 seconds
    }, 1500);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/TermCondition" element={<TermCondition />} />
        <Route path="/Myprofile" element={<Myprofile />} />
        <Route path="/AppliedJobs" element={<AppliedJobs />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/Sidenav" element={<Sidenav />} />
        <Route path="/Myresume" element={<Myresume />} />
        <Route path="/ImageUpload" element={<ImageUpload />} />
        <Route path="/RegistrationSection" element={<RegistrationSection />} />
        <Route path="/ResumeUpload" element={<ResumeUpload />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/RecruiterDashboard" element={<RecruiterDashboard />} />
        <Route path="/RecruiterSidenav" element={<RecruiterSidenave />} />
        <Route path="/CandidateCard" element={<CandidateCard />} />
        <Route path="/CandidateList" element={<CandidateList />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Managejob" element={<ManageJob />} />
        <Route path="/Postjob" element={<PostJob />} />
        <Route path="/Transaction" element={<Transaction />} />
        <Route path="/BrowserCandidate" element={<BrowserCandidate />} />
        <Route path="TransactionList" element={<TransactionList />} />
        <Route path="RecruiterChangePassword"element={<RecruiterChangePassword />}/>
        <Route path="/SearchJob" element={<SearchJob />} />
        <Route path="/Filter" element={<Filter/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
