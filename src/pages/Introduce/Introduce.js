import React from "react";
import titleImage from "../../images/images.png";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.css";

const Introduce = () => {
  const navigate = useNavigate();
  function handleInput() {
    console.log("input 태그 동작");
  }
  function handleButton() {
    console.log("button 태그 동작");
    navigate("/product");
  }
  return (
    <div className="introduce">
      <img src={titleImage} alt="main" className="mainImage" />
      <p className="name">옥준우</p>
      <p className="number">46기</p>
      <div className="wrap">
        <input type="text" onChange={handleInput} />
        <button onClick={handleButton}>클릭</button>
      </div>
      <Link to="/product">product 페이지로 이동</Link>
    </div>
  );
};

export default Introduce;
