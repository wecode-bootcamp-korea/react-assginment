import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
    <>
      <div className="introduce">
        <img className="mainImg" src="images/avatar.jpg" alt="main" />
        <p className="name">백지율</p>
        <p className="batch">46기</p>
        <div className="inputBox">
          <input
            className="textInput"
            type="text"
            onChange={handleInput}
            placeholder="입력"
          />
          <button className="clickBtn" onClick={handleButton}>
            클릭
          </button>
        </div>
        <Link to="/product">product 페이지로 이동</Link>
      </div>
      <div className="color-card-list">
        {COLOR_CARD_INFO.map((card) => {
          return (
            <div className="color-card" key={card.id}>
              <div className={`color-card-background ${card.name}`}></div>
              <div className="name">이름: {card.name}</div>
              <div className="rgb">rgb: {card.rgb}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Introduce;

const COLOR_CARD_INFO = [
  { id: 0, name: "red", rgb: "255, 0, 0" },
  { id: 1, name: "yellow", rgb: "255, 255, 0" },
  { id: 2, name: "green", rgb: "0, 128 , 0" },
  { id: 3, name: "blue", rgb: "0, 0, 255" },
];
