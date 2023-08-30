import React from "react";
import "./Introduce.css";
import wecodelogo from "./wecodelogo.png";

const Introduce = () => {
  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const handleButton = () => {
    console.log("button 태그 동작");
  };

  return (
    <div className="introBody">
      <div className="container">
        <div className="contentDiv">
          <img className="imgFile" src={wecodelogo} alt="imageFile" />
          <div className="textDiv">
            <p className="name">이소연</p>
            <p className="th">49기</p>
          </div>
          <div className="inputDiv">
            <input className="inputText" onChange={handleInput} type="text" />
            <button className="inputBtn" onClick={handleButton}>
              클릭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
