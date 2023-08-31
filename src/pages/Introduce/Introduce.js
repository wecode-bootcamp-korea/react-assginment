import React from "react";
import "./introduce.css";
const Introduce = () => {
  return (
    <div className="introduction">
      <div className="container">
        <div className="self">
          <img
            src="/images/golf-ball-white.jpg"
            alt="사진없음"
            className="photo"
          />
          <div className="info">
            <p className="name">안병우</p>
            <p className="number">49기</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduce;
