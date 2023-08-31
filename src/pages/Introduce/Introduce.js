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
    <div className="Introduction">
      <div className="container">
        <div className="informationcontainer">
          <img
            src="/images/golf-ball-red.jpg"
            alt="ballimage"
            className="ballimage"
          />
          <div className="letter">
            <h1>권순우</h1>
            <h2>49기</h2>
            <div className="InputnButton">
              <input onChange={handleInput}></input>
              <button onClick={handleButton}>클릭</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
