import React from "react";
import logo from "../Introduce/wecode.png";
import "./Introduce.css";

const Info = () => {
  return (
    <div className="introduce-container-info">
      <strong>조영준</strong>
      <div className="generation">49기</div>
    </div>
  );
};

const Form = () => {
  return (
    <form className="introduce-container-form">
      <input
        onChange={() => {
          console.log("input 태그 동작");
        }}
      ></input>
      <input
        type="button"
        value="클릭
          "
        onClick={() => {
          console.log("button 태그 동작");
        }}
      />
    </form>
  );
};

const Introduce = () => {
  return (
    <div className="introduce">
      <div className="introduce-container">
        <img className="wecode-logo" src={logo} alt="wecode"></img>
        <Info />
        <Form />
      </div>
    </div>
  );
};

export default Introduce;
