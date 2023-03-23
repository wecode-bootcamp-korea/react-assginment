import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();

  function handleButton() {
    console.log("button 태그 동작");
    navigate("/product");
  }

  function handleInput() {
    console.log("input 태그 동작");
  }

  return (
    <div className="profile">
      <div className="center">
        <div className="inner">
          <div className="wecode">>wecode</div>
        </div>
        <div className="name">박효성</div>
        <div className="class">44기</div>
        <input onChange={handleInput}></input>
        <button onClick={handleButton}>클릭</button>
        <div className="link">
          <Link to="/product">product 페이지로 이동</Link>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
