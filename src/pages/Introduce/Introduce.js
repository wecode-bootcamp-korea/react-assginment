import React from "react";
import "./Introduce.scss";
import wecodelogo from "./wecodelogo.png";
import { Link, useNavigate } from "react-router-dom";

const IntroduceCards = [
  { id: 1, color: "red", rgb: "255, 0, 0" },
  { id: 2, color: "yellow", rgb: "255, 255, 0" },
  { id: 3, color: "green", rgb: "0, 128, 0" },
  { id: 4, color: "blue", rgb: "0, 0, 255" },
];

const Introduce = () => {
  const handleInput = () => {
    console.log("input 태그 동작");
  };
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/product");
  };

  return (
    <>
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
              <button className="inputBtn" onClick={handleButton}>
                클릭
              </button>
            </div>
            <Link to="/product">
              <p className="productLink">product 페이지로 이동</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="introduceCardDiv">
        {IntroduceCards.map((card) => {
          return (
            <div className="container" key={card.id}>
              <div className="contentDiv">
                <div className={`colorDiv ${card.color}`} />
                <div className="textDiv">
                  <p className="name">이름 : {card.color}</p>
                  <p className="th">rgb : {card.rgb}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Introduce;
