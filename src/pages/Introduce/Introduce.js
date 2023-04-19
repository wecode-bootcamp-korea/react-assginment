import React from "react";
import "./Introduce.css";

const Introduce = () => {
  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const handleButton = () => {
    console.log("button 태그 동작");
  };

  return (
    <div className="Introduce">
      <div className="Introduceform">
        <img
          className="Introduceimg"
          src="/images/ZzangGu.jpg"
          alt="자기소개 이미지"
        />
        <div className="Info">
          <h2>이소진</h2>
          <h3>45기</h3>
          <input onChange={handleInput} className="InputMotion" type="text" />
          <button onClick={handleButton} className="buttonMotion">
            클릭
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
