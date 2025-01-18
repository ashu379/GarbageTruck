import React, { useState, useEffect } from "react";
import JobSearch from "./JobSearch";
import Lower from "./Lower";

import Dustbin from "./Dustbin";
import Counter from "./Counter";
import JobCard from "./Jobcard";
import { FaExternalLinkAlt } from "react-icons/fa";



const Home = () => {
  //Need to Delete This Sample DATA which is used to shocase the JOBCARD component
  
 
  const jobData = [
    {
      rating: "5 / 5",
      title: "Driver",
      company: "Nebula Corp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "London",
      salary: "1250",
      workType: "Remote",
      datePosted: "June 6, 2022",
    },
    {
      rating: "4.8 / 5",
      title: "Loader & Driver ",
      company: "Xanex Comp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "NYC",
      salary: "356",
      workType: "Remote",
      datePosted: "June 6, 2022",
    },
  ];

 

  const headings = [
    "Welcome to Our Website",
    "Discover Our Services",
    "Join Our Community",
    "Contact Us Today",
  ];

  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const updateHeading = () => {
      setCurrentHeadingIndex((prevIndex) =>
        prevIndex === headings.length - 1 ? 0 : prevIndex + 1
      );
    };
    const intervalId = setInterval(updateHeading, 5000);
    return () => clearInterval(intervalId);
  }, [headings.length]);

  // If loading is true, render the Preloader
  

  // If loading is false, render the homepage content
  return (
    <div className="hero">
      <div style={{width:"100%",height:"10rem",position:"absolute",zIndex:"-123",top:"-8rem",backgroundColor:"#efeef4"}}>

</div>

      <div className="hero-section">
        <span>{headings[currentHeadingIndex]}</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          repellat non delectus voluptas cum adipisci repudiandae optio! Itaque,
          vitae fugit!
        </p>
        <div className="search-pannel">
          <JobSearch />
        </div>
    
        <div className="container partners_container">
          <div className="row pt-2 pl-5 pr-5 justify-content-center partner_child">
            <div className="col-lg-2 d-flex justify-content-center align-item-center">
              <img src="/images/client-1.png" alt="logo" />
            </div>
            <div className="col-lg-2 d-flex justify-content-center align-item-center">
              <img src="/images/client-2.png" alt="logo" />
            </div>
            <div className="col-lg-2 d-flex justify-content-center align-item-center">
              <img src="/images/client-3.png" alt="logo" />
            </div>
            <div className="col-lg-2 d-flex justify-content-center align-item-center">
              <img src="/images/client-4.png" alt="logo" />
            </div>
            <div className="col-lg-2 d-flex justify-content-center align-item-center">
              <img src="/images/client-5.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>

        <Lower />

      <div className="job-rating">
        <div className="job-list">
          <h1>Top rated</h1>
          <div className="job-head">
            <p style={{color:"rgb(71 69 69 / 78%)"}}>
              See your opportunity in the highest job demand around the world
            </p>

            <span className="jobclick">
              <p style={{color:"#00baed"}}>
                see all job <FaExternalLinkAlt />
              </p>{" "}
            </span>
          </div>
          <div className="job-cards">
            {jobData.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </div>
      <Counter />
      <Dustbin />
      
    </div>
  );
};

export default Home;
