import React from "react";
import "./Introduce.scss";
import { Link } from "react-router-dom";

const Introduce = () => {
  const handleInput = () => {
    console.log(`input 태그 동작`);
  };

  const handleButton = () => {
    console.log(`button 태그 동작`);
  };

  return (
    <>
      <div className="card">
        <div className="proImg"></div>
        <div className="name">
          <span>양진민</span>
        </div>
        <div className="numTh">
          <span>45기</span>
        </div>
        <div className="input" onChange={() => handleInput()}>
          <input type="text" />
          <Link to="/product">
            <button onClick={() => handleButton()}>클릭</button>
          </Link>
        </div>
        <div>
          <Link to="/product">Product 페이지로 이동</Link>
        </div>
      </div>
    </>
  );
};

export default Introduce;
