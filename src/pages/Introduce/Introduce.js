import React from "react";
import "./Introduce.css";

const Introduce = () => {
  return (
    <div className="Introduce">
      <div className="Introduceform">
        <img
          className="Introduceimg"
          src="/images/ZzangGu.jpg"
          alt="자기소개 이미지"
        />
        <p className="Info">
          <h2>이소진</h2>
          <h3>45기</h3>
        </p>
      </div>
    </div>
  );
};

export default Introduce;
