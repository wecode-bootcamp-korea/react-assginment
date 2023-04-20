import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();

  const handleInput = () => {
    console.log(`input 태그 동작`);
  };

  const handleButton = () => {
    console.log(`button 태그 동작`);
    navigate("/product");
  };

  return (
    <div className="introduce">
      <div className="proImg"></div>
      <div className="name">
        <span>양진민</span>
      </div>
      <div className="numTh">
        <span>45기</span>
      </div>
      <div className="input" onChange={() => handleInput()}>
        <input type="text" />
        <button onClick={() => handleButton()}>클릭</button>
      </div>
      <div>
        <Link to="/product">Product 페이지로 이동</Link>
      </div>
    </div>
  );
};

export default Introduce;
