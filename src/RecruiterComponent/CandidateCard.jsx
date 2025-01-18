import React from 'react'

const CandidateCard = ({ name, profession, location, rate, profilePic }) => {
  return (
    <>
     <div className="candidate-card">
      <img src={profilePic} alt={name} className="candidate-image" />
      <h3 className="candidate-name">{name}</h3>
      <p className="candidate-profession">{profession}</p>
      <a href="#" className="download-resume">
        <i className="fa fa-download"></i>
      </a>
      <div className="candidate-footer">
        <span className="location">
          <i className="fa fa-map-marker"></i> {location}
        </span>
        <span className="rate">{rate}</span>
      </div>
    </div>
    </>
  )
}

export default CandidateCard