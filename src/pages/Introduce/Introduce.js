import React from "react";
import "./Introduce.scss";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="Introduce">
      <div className="Introduceform">
        <img
          className="Introduceimg"
          src="/images/ZzangGu.jpg"
          alt="자기소개 이미지"
        />
        <div className="Info">
          <div className="Name">
            <h2>이소진</h2>
          </div>
          <h3>45기</h3>
          <input onChange={handleInput} className="InputMotion" type="text" />
          <button onClick={handleButton} className="buttonMotion">
            클릭
          </button>
          <Link to="/product">product 페이지로 이동</Link>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
