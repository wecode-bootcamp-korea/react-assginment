import React from "react";
import { useNavigate, Link } from "react-router-dom";
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
      <div className="wrapper">
        <img src="/images/cat.jpeg" alt="고양이"></img>

        <div className="myDetail">
          <div className="myName">김준섭</div>
          <div className="numb">45기</div>
        </div>

        <div className="inBtn">
          <input className="inputs" onChange={handleInput}></input>
          <button className="btns" onClick={handleButton}>
            버튼
          </button>
          <Link to="/product">Product 페이지로 이동</Link>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
