import React from "react";
import "./introduce.scss";
import { Link, useNavigate } from "react-router-dom";

const Introduce = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    console.log("button 태그 동작");
    navigate("/product");
  };
  const handleInput = () => {
    console.log("input 태그 동작");
  };

  return (
    <>
      <div className="wrap">
        <div className="profileBackgroundColor">
          <p className="wecode"> &gt; wecode </p>
        </div>
        <div className="profile">
          <span className="bold">김지연</span>
          <br />
          <span>46기</span>
          <br />
        </div>

        <input className="inputText" type="text" onChange={handleInput} />

        <button className="clickBtn" onClick={handleButton}>
          클릭
        </button>

        <Link to="Product">
          <span className="moveToProductPage">product 페이지로 이동</span>
        </Link>
      </div>
    </>
  );
};

export default Introduce;
