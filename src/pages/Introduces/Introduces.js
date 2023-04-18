import React from "react";
import "./Introduce.scss";

const Introduce = () => {
  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const handleButton = () => {
    console.log("button 태그 동작");
  };

  return (
    <div className="introduce">
      <div className="box">
        <img
          alt="프로필 사진"
          src="https://avatars.githubusercontent.com/u/52394741?s=200&v=4"
        ></img>
        <span className="name">연정아</span>
        <span className="session">45기</span>
        <div className="search">
          <input onChange={handleInput} />
          <button onClick={handleButton}>입력</button>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
