import React from "react";
import "./Introduce.scss";

const Introduce = () => {
  return (
    <div className="introduce">
      <div className="introduce-box">
        <div className="introduce-wecode">&gt;wecode</div>
        <div className="introduce-detail">
          <h1>장지아</h1>
          <h1>43기</h1>
          <input
            onChange={function handleInput() {
              console.log("input 태그 동작");
            }}
          />
          <button
            onClick={function handleButton() {
              console.log("button 태그 동작");
            }}
          >
            클릭
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
