import React from "react";

const Introduce = () => {
  return (
    <nav className="totalWrap">
      <div className="wecodeWrap">
        <h1 className="wecode">> wecode</h1>
        <p className="name">권유정</p>
        <p className="class">43기</p>
        <input onChange={handleInput}></input>
        <button onClick={handleButton}>클릭</button>
      </div>
    </nav>
  );
};

const handleInput = () => {
  console.log("input 태그 동작");
};

const handleButton = () => {
  console.log("button 태그 동작");
};

export default Introduce;
