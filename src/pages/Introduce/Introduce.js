import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";

function Introduce() {
  const navigate = useNavigate();

  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const handleButton = () => {
    navigate("/product");
    console.log("button 태그 동작");
  };

  return (
    <div className="introduce">
      <div className="container">
        <img
          className="profile-pic"
          src="https://cdn.pixabay.com/photo/2023/05/15/11/43/11-43-23-560_960_720.jpg"
          alt="profile picture"
        />
        <div className="name">조혜진</div>
        <div className="batch">46기</div>
        <input type="text" onChange={handleInput} />
        <button onClick={handleButton}>클릭</button>
        <br />
        <Link to="/product" className="toProductPage">
          product 페이지로 이동
        </Link>
      </div>
    </div>
  );
}

export default Introduce;
