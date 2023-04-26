import React from "react";
import { useNavigate, Link } from "react-router-dom";
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
    <div className="introduce">
      <div className="wrapper">
        <img src="/images/cat.jpeg" alt="고양이"></img>

        <div className="myDetail">
          <div className="myName">김준섭</div>
          <div className="numb">45기</div>
        </div>

        <div className="inBtn">
          <input className="inputs" onChange={handleInput}></input>
          <button className="btns" onClick={handleButton}>
            버튼
          </button>
          <Link to="/product">Product 페이지로 이동</Link>
        </div>
      </div>
      <div className="colorCards">
        {COLOR_CARD.map((colorCard) => (
          <div className="colorBox">
            <div
              className="colorBg"
              style={{ backgroundColor: `rgb(${colorCard.rgb})` }}
            ></div>
            <div className="details">
              <div className="colorName">{`이름 : ${colorCard.name}`}</div>
              <div className="colorRgb">{`rgb : ${colorCard.rgb}`}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const COLOR_CARD = [
  { name: "red", rgb: "255,0,0" },
  { name: "yellow", rgb: "255,255,0" },
  { name: "green", rgb: "0,128,0" },
  { name: "blue", rgb: "0,0,255" },
];

export default Introduce;
