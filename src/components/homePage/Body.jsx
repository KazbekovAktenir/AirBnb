import React from "react";
import Airbnb from "./assets/Airbnb.mp4";
import "./Body.css";
const Body = () => {
  return (
    <div className="videoContainer">
      <video autoPlay muted loop className="video">
        <source src={Airbnb} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Body;
