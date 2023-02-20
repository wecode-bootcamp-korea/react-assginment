import React from "react";
import "./Introduce.css";

const image = () => {
  return (
    <div className="contentContainer">
      <div className="logoBox">
        <h1>&gt; wecode</h1>
      </div>
      <div className="nameBox">
        <h2>김개발</h2>
        <p>00기</p>
      </div>
      <form>
        <input type="text" onChange={handleInput}></input>
        <button type="button" onClick={handleButton}>
          클릭
        </button>
      </form>
    </div>
  );
};

const handleInput = () => {
  console.log("input 태그 동작");
};

const handleButton = () => {
  console.log("button 태그 동작");
};

export default image;
