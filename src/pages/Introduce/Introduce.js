import React from "react";
import "./Introduce.scss";

const Introduce = () => {
  function handleButton() {
    console.log("button 태그 동작");
  }

  function handleInput() {
    console.log("input 태그 동작");
  }

  return (
    <div className="profile">
      <div className="center">
        <div className="inner">
          <div className="wecode">>wecode</div>
        </div>
        <div className="name">박효성</div>
        <div className="class">44기</div>
        <input onChange={handleInput}></input>
        <button onClick={handleButton}>클릭</button>
      </div>
    </div>
  );
};

export default Introduce;
