import React from "react";
import "./introduce.css";
import { Link } from "react-router-dom";

const handleInput = () => {
  console.log("input 태그 동작");
};
const handleButton = () => {
  console.log("button 태그 동작");
};

const Introduce = () => {
  return (
    <>
      <div id="wrap">
        <div id="Black">
          <p id="wecode"> &gt; wecode </p>
        </div>
        <div id="profile">
          <span id="bold">김지연</span>
          <br />
          <span>46기</span>
          <br />
        </div>

        <input type="text" onChange={handleInput} />
        <Link to="Product">
          <button onClick={handleButton}>클릭</button>
        </Link>
        <Link to="Product">
          <a href="/">product 페이지로 이동</a>
        </Link>
      </div>
    </>
  );
};

export default Introduce;
