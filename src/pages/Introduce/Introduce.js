import React from "react";
import "./Introduce.css";
import wecodelogo from "./wecodelogo.png";

const Introduce = () => {
  return (
    <div className="introBody">
      <div className="container">
        <div className="contentDiv">
          <img className="imgFile" src={wecodelogo} alt="imageFile" />
          <div className="textDiv">
            <p className="name">이소연</p>
            <p className="th">49기</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
