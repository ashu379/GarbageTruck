import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function JobSearch() {
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [keyword, setKeyword] = useState(""); // New state for keyword search
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch jobs from API
  // const fetchJobs = async () => {
  //     setLoading(true);
  //     try {
  //         const response = await axios.get('/api/jobs', {
  //             params: { location, jobType, keyword }, // Include keyword in API params
  //         });
  //         setJobs(response.data); // Assuming the API returns an array of job data
  //     } catch (error) {
  //         console.error('Error fetching job data:', error);
  //     }
  //     setLoading(false);
  // };

  // Handle filter changes
  const handleSearch = () => {
    // Redirect to the dashboard
    navigate("/SearchJob");
  };

  return (
    <div className="job_search_grand_container">
      <div className="job-search-container">
        <div className="filters">
          {/* Job Search Bar */}
          <input
            type="text"
            placeholder="Search by keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          {/* Location Filter */}
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Chicago">Chicago</option>
            {/* Add more locations as needed */}
          </select>

          {/* Job Type Filter */}
          <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
            <option value="">Select Job Type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            {/* Add more job types as needed */}
          </select>

          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="job-list">
            {jobs.length > 0 && // Only render jobs if there are any
              jobs.map((job) => (
                <div key={job.id} className="job-card">
                  <h3>{job.title}</h3>
                  <p>Location: {job.location}</p>
                  <p>Type: {job.jobType}</p>
                  <p>Description: {job.description}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default JobSearch;
