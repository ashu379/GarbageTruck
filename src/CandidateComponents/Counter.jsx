
import ScrollTrigger from "react-scroll-trigger";
import React, { useState } from "react";
import CountUp from "react-countup";




const Counter = () => {

  const [counterStart, setCounterStart] = useState(false);


  return (
  
   <>
    <ScrollTrigger
        onEnter={() => setCounterStart(true)}
        onExit={() => setCounterStart(false)}
      >
        <section className="counter_container">
          <div className="counter_row">
            <div className="counter_box">
             
              <h2>
                {counterStart && (
                  <CountUp start={0} end={700} duration={5} delay={0} />
                )}{""}
            
              </h2>
              <p>Availabe Job Vacancy</p>
            </div>
            <div className="counter_box">
             
              <h2>
                {counterStart && (
                  <CountUp start={0} end={935} duration={5} delay={0} />
                )}{""}
                
              </h2>
              <p>Registered Global Company</p>
            </div>
            <div className="counter_box">
            
              <h2>
                {counterStart && (
                  <CountUp start={0} end={897} duration={5} delay={0} />
                )}{""}
                
              </h2>
              <p>Daily Active User</p>
            </div>
          </div>
        </section>
      </ScrollTrigger>

    </>
    
  );
  
};

export default Counter;
