import React from "react";
import "./introduce.css";
const Introduce = () => {
  const handClick = () => {
    console.log("input 태그 동작");
  };

  const handButton = () => {
    console.log("button 태그 동작");
  };
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
          <div className="title">
            <input type="text" className="textbox" onChange={handClick} />
            <button className="click" onClick={handButton}>
              클릭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduce;
