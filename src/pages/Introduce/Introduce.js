import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";

function Introduce() {
  const navigate = useNavigate();
  const handleInput = () => {
    console.log("input 태그 동작");
  };
  const handleButton = () => {
    navigate("/product");
    console.log("button 태그 동작");
  };
  const COLOR_LIST = [
    { id: "red", colorName: "red", colorCode: "255, 0, 0" },
    { id: "yellow", colorName: "yellow", colorCode: "255, 255, 0" },
    { id: "green", colorName: "green", colorCode: "0, 128, 0" },
    { id: "blue", colorName: "blue", colorCode: "0, 0, 255" },
  ];

  return (
    <div className="introduce">
      <div className="profile-container">
        <img
          className="profile-pic"
          src="./images/sydney.jpg"
          alt="profile picture"
        />
        <div className="name">조혜진</div>
        <div className="batch">46기</div>
        <input type="text" onChange={handleInput} />
        <button onClick={handleButton}>클릭</button>
        <br />
        <Link to="/product" className="toProductPage">
          product 페이지로 이동
        </Link>
      </div>
      <div className="color-card-container">
        {COLOR_LIST.map((colorList) => {
          return (
            <div className="color-card">
              <div className={`color-box ${colorList.id}`}></div>
              <div className="color-name">이름 : {colorList.colorName} </div>
              <div className="color-code">rgb : {colorList.colorCode}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Introduce;
