import React from "react";
import "./Introduce.css";
import logo from "../Introduce/wecode.png";

const Introduce = () => {
  return (
    <div className="introduce">
      <div className="introduce-container">
        <img className="wecode-logo" src={logo} alt="wecode"></img>
        <div className="introduce-container-body">
          <div>조영준</div>
          <div className="generation">49기</div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
