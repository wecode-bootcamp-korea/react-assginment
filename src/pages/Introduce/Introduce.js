import React from "react";
import "./Introduce.scss";
import wecodelogo from "./wecodelogo.png";
import { Link, useNavigate } from "react-router-dom";

const Introduce = () => {
  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const navigate = useNavigate();

  return (
    <div className="introduce">
      <div className="container">
        <div className="contentDiv">
          <img className="imgFile" src={wecodelogo} alt="imageFile" />
          <div className="textDiv">
            <p className="name">이소연</p>
            <p className="th">49기</p>
          </div>
          <div className="inputDiv">
            <input className="inputText" onChange={handleInput} type="text" />
            <button
              className="inputBtn"
              onClick={() => {
                navigate("/product");
              }}
            >
              클릭
            </button>
          </div>
          <Link to="/product">
            <p className="productLink">product 페이지로 이동</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
