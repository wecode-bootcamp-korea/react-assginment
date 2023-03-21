import React from "react";
import "./Introduce.css";

import { useNavigate } from "react-router-dom";

const IntroduceName = () => {
  const navigate = useNavigate();

  const logoname = "> wecode";
  const handleInput = () => {
    console.log("input 태그 동작");
  };
  const handleButton = (e) => {
    e.preventDefault();
    navigate("/product");
    console.log("button 태그 동작");
  };

  return (
    <div className="body">
      <div className="container">
        <div className="logobox">
          <span>{logoname}</span>
        </div>
        <span className="name">박지연</span>
        <span className="class">44기</span>
        <form>
          <input type="text" onChange={handleInput} />
          <button onClick={handleButton}>클릭</button>
        </form>
      </div>
    </div>
  );
};

export default IntroduceName;
