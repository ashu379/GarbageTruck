import React, { useState, useEffect } from "react";
import CandidateCard from "./CandidateCard";



const CandidateList = () => {

  const data=[
    {
      "id": 1,
      "name": "Wanda Montgomery",
      "profession": "Loader",
      "location": "New York",
      "rate": "$20 / Day",
        "profilePic": "https://via.placeholder.com/150"

    },
    {
      "id": 2,
      "name": "Peter Hawkins",
      "profession": "Driver",
      "location": "New York",
      "rate": "$7 / Hour",
        "profilePic": "https://via.placeholder.com/150"

    },
  {
    "id": 3,
    "name": "Peter Parker",
    "profession": "Driver",
    "location": "New York",
    "rate": "$7 / Hour",
      "profilePic": "https://via.placeholder.com/150"

  },
{
  "id": 4,
  "name": "Iron man",
  "profession": "Driver",
  "location": "New York",
  "rate": "$7 / Hour",
    "profilePic": "https://via.placeholder.com/150"

  },
{
  "id": 5,
  "name": "Black Widow",
  "profession": "Loader",
  "location": "New York",
  "rate": "$7 / Hour",
    "profilePic": "https://via.placeholder.com/150"

  },
{
  "id": 6,
  "name": "Steve Rogers",
  "profession": "Driver",
  "location": "New York",
  "rate": "$7 / Hour",
    "profilePic": "https://via.placeholder.com/150"

  },
{
  "id": 7,
  "name": "Scot lang",
  "profession": "Driver",
  "location": "New York",
  "rate": "$7 / Hour",
    "profilePic": "https://via.placeholder.com/150"

  },
{
  "id": 8,
  "name": "Scot lang",
  "profession": "Driver",
  "location": "New York",
  "rate": "$7 / Hour",
    "profilePic": "https://via.placeholder.com/150"

  }
  ]
  

    const [candidates, setCandidates] = useState(data);

  // useEffect(() => {
  //   // Replace with your API endpoint
  //   fetch("https://api.example.com/candidates")
  //     .then((res) => res.json())
  //     .then((data) => setCandidates(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  return (
    <>
     <div className="candidate-list">
      <header>
        <h2>Showing {candidates.length} Candidates</h2>
        <div className="filters">
          <select>
            <option value="mostRecent">Most Recent</option>
          </select>
          <select>
            <option value="10">Show 10</option>
          </select>
        </div>
      </header>
      <div className="card-container">
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} {...candidate} />
        ))}
      </div>
    </div>
    </>
  )
}

export default CandidateList