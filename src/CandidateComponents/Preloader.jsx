// Preloader.jsx
import React from "react";

const Preloader = ({ isLoading }) => {
  if (isLoading == false) return null;

  return (
    <div className="preloader">
      <video className="preloader-video" autoPlay muted loop>
        <source src="./images/truck.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Preloader;
