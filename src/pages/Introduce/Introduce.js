import React from "react";
import titleImage from "../../images/images.png";
import "./Introduce.css";

const handleButton = () => {
  console.log("button 태그 동작");
};

const handleInput = () => {
  console.log("input 태그 동작");
};

const Introduce = () => {
  return (
    <div className="introduce">
      <img src={titleImage} alt="main" className="mainImage" />
      <p className="name">옥준우</p>
      <p className="number">46기</p>
      <div className="wrap">
        <input type="text" onChange={handleInput} />
        <button onClick={handleButton}>클릭</button>
      </div>
    </div>
  );
};

export default Introduce;
