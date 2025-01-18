import React from 'react';
import TestimonialSlider from './TestimonialSlider';

const Dustbin = () => {
  return (
    <>
      <div className="container">
        <div className="row p-3" style={{marginTop:"-4rem"}}>
          <div className="col-lg-6 p-3 ">
            <img className='dustbin-image' src="/images/dustbin-worker.png" alt="dustbin" />
          </div>

          <div className="col-lg-6 ">
            <h3 className='heading'>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              sit maiores architecto in fugiat mollitia blanditiis et odio hic
              facilis.
            </p>

            <TestimonialSlider/>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Dustbin;
