import React, { useEffect, useState } from "react";
import Filter from "../CandidateComponents/Filter";
import jobListData from "../Data/jobListData";


const SearchJob = () => {

  const [store, setStore] = useState(jobListData)

  useEffect(()=>{
    !store && setStore(jobListData);
  },[])

  return (
    <>
      <div className="header">
        <div className="header_child">
          <h2>The Most Exciting Jobs</h2>
        </div>
      </div>

      <div className="SearchJob_container">
        <Filter list={setStore} jobList={store}/>
        <div className="SearchJob_right">
         
       
      {/* this my code */}
         
         {store.map((list)=>
        {
            return(
               <div className="search_job_card">
                 <div className="company_logo">
                 <img  src={list.image}/>
                </div>
                <div className="joblist_title_section">
                  <h4>{list.title}</h4>
                  <p>{list.location}</p>
                  <p>{list.company}</p>
                </div>
                <div className="joblist_right">
                  <p>{list.salary}</p>
                  <p>{list.type}</p>
                  <button>Apply</button>
                </div>
               </div>
            )
        })}
         
        
         
         
        </div>
      </div>
    </>
  );
};

export default SearchJob;
