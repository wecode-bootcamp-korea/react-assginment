import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();

  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const handleButton = () => {
    console.log("button 태그 동작");
    navigate("/product");
  };

  return (
    <div className="introduce">
      <img src="images/avatar.jpg" alt="main" />
      <p className="name">백지율</p>
      <p className="batch">46기</p>
      <div className="inputBox">
        <input
          className="textInput"
          type="text"
          onChange={handleInput}
          placeholder="입력"
        />
        <button className="clickBtn" onClick={handleButton}>
          클릭
        </button>
      </div>
      <Link to="/product">product 페이지로 이동</Link>
    </div>
  );
};

export default Introduce;
