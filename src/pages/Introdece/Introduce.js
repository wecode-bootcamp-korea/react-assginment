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

      <div className="colorList">
        <ul>
          {COLOR_LIST.map((info) => (
            <li className="ColorBox" key={info.id}>
              <div className={`bgColor ${info.color}`}></div>
              <span className="colorName">이름 : {info.color}</span>
              <span className="colorRgb">rgb : {info.colorRgb}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Introduce;

const COLOR_LIST = [
  { id: 1, color: "red", colorRgb: "255, 0, 0" },
  { id: 2, color: "yellow", colorRgb: "255, 255, 0" },
  { id: 3, color: "green", colorRgb: "0, 128, 0" },
  { id: 4, color: "blue", colorRgb: "0, 0, 255" },
];
