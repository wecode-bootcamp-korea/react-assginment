import React from "react";
import "./Introduce.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const navigate = useNavigate();

  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const handleButton = () => {
    navigate("/product");
  };

  return (
    <div className="contentContainer">
      <div className="logoBox">
        <h1>&gt; wecode</h1>
      </div>
      <div className="nameBox">
        <h2>김개발</h2>
        <p>00기</p>
      </div>
      <form>
        <input type="text" onChange={handleInput}></input>
        <button type="button" onClick={handleButton}>
          클릭
        </button>
      </form>
      <Link to="/product">Product 페이지로 이동</Link>
    </div>
  );
};

export default Introduce;
