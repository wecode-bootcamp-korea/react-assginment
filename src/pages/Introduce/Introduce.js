import React from "react";
import "../Introduce/Introduce.scss";
import { Link } from "react-router-dom";

const Introduce = () => {
  function handleInput() {
    console.log("input 태그동작");
  }

  function handleButton() {
    console.log("button 태그동작");
  }

  return (
    <div className="box">
      <div className="boxWwrap">
        <div className="weCodeBox">
          <h2>{">"}wecode</h2>
        </div>
      </div>
      <strong className="info">홍태훈</strong>
      <div className="info">43기</div>
      <div className="inputBox">
        <input className="input" onChange={handleInput}></input>

        <Link to="/product">
          <button className="button" onClick={handleButton}>
            클릭
          </button>
        </Link>
      </div>
      <div>
        <Link to="/product" className="link">
          product페이지로 이동
        </Link>
      </div>
    </div>
  );
};

export default Introduce;
