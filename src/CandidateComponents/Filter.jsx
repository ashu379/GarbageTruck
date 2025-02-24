import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import jobListData from "../Data/jobListData";



const Filter = (props) => {

  const [store, setStore] = useState(props.jobList)

    const [filters, setFilters] = useState({
        keyword: "",
        location: "",
        jobType: "Freelance",
        yearsOfExperience: "Fresher", 
      });
    
      const jobTypes = ["Freelance", "Full-time", "Internship", "Part-time", "Temporary", "Volunteer"];
      const experienceOptions = ["Fresher", "0-1", "1-3", "3-5", "5-7",];

    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setFilters((prevFilters) => ({
          ...prevFilters,
          [name]: value,
        }));

        props.list(jobData)
      };

      
          let jobData = jobListData.filter((list) =>
          {

            return  list.title.toLowerCase().includes(filters.keyword)  && list.location.toLowerCase().includes(filters.location)
                 
          })

          console.log(jobData)
          

         
  

          
  return (
    <>
     <div className="filter-container">

      <div className="filter-item">
        <label>Keyword</label>
        <div className="input-icon">
          <input
            type="text"
            name="keyword"
            placeholder="Job Title or Keyword"       
            value={filters.keyword}
            onChange={handleInputChange}
          />
          <FaSearch className="icon" />
        </div>
      </div>

      <div className="filter-item">
        <label>Location</label>
        <div className="input-icon">
          <input
            type="text"
            name="location"
            placeholder="Search location"
            value={filters.location}
            onChange={handleInputChange}
          />
          <FaMapMarkerAlt className="icon" />
        </div>
      </div>

      <div className="filter-item">
        <label>Job Type</label>
        <select name="jobType" value={filters.jobType} onChange={handleInputChange}>
          {jobTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label>Years of Experience</label>
        <select name="yearsOfExperience" value={filters.yearsOfExperience} onChange={handleInputChange}>
          {experienceOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

   

      <button className="filter-btn" >Search</button>
    </div>
    </>
  )
}

export default Filter