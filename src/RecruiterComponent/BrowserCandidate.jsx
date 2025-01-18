import React from 'react'
import Filter from '../CandidateComponents/Filter.jsx'
import CandidateList from './CandidateList'

const BrowserCandidate = () => {
  return (
    <>
      <div className="header">
        <div className="header_child">
          <h2>Company Grid</h2>      
        </div>
      </div>

      <div className='browseCandidate_container'>
        <Filter/>
        <div className='browsercandidate_right'>
        <CandidateList/>
        </div>
      </div>
    
    </>
  )
}

export default BrowserCandidate