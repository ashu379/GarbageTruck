import React from 'react'
import RecruiterSidenave from './RecruiterSidenave'
import TransactionList from './TransactionList'

const Transaction = () => {
  return (
   <>
   <div className="header">
        <div className="header_child">
          <h2>Company Profile</h2>
        </div>
      </div>
      <div className="dashboard_container">
      <RecruiterSidenave/>
        <div className="right_side">

          <TransactionList/>

        </div>

      </div>
   </>
  )
}

export default Transaction