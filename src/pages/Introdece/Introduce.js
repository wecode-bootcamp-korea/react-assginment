import React from "react";
import "./Introduce.scss";
import { Link, useNavigate } from "react-router-dom";

const Introduce = () => {
  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const handleButton = () => {
    navigate("/Product");
  };

  const navigate = useNavigate();

  return (
    <div className="introduce">
      <div className="introduceBox">
        <img className="introduceImg" src="/images/jini.jpg" alt="jini" />
        <span className="introduceName">최진이</span>
        <span className="introduceNum">47기</span>
        <form>
          <input
            className="introduceInput"
            type="text"
            placeholder="내용입력"
            onChange={handleInput}
          />
          <button className="introduceBtn" type="sumbit" onClick={handleButton}>
            클릭
          </button>
        </form>
        <Link to="/Product">Product 페이지로 이동</Link>
      </div>
    </div>
  );
};

export default Introduce;
