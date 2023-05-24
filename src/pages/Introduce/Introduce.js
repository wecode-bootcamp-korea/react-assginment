import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";

function Introduce() {
  function handleInput() {
    console.log("input 태그 동작");
  }
  const navigate = useNavigate();

  return (
    <div className="Introduce">
      <div className="wrap">
        <div className="image">>wecode</div>
        <p className="name">김민정</p>
        <p className="number">46기 </p>

        <div className="btnWrap">
          <input className="inputTxt" type="text" onChange={handleInput} />
          <button
            className="productBtn"
            onClick={() => {
              navigate("/product");
            }}
          >
            클릭
          </button>
        </div>
        <Link to="/product" className="productBtn">
          product 페이지로 이동
        </Link>
      </div>

      <div className="colorbox">
        {COLOR_CARD.map((colorCard) => {
          return (
            <div key={colorCard.id} className="colorCard">
              <div className="wrap">
                <div className={`image ${colorCard.name}`}></div>
                <p className="text">이름 :{colorCard.name}</p>
                <p className="text">rgb :{colorCard.color}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Introduce;

const COLOR_CARD = [
  { id: 1, name: "red", color: "255, 0, 0" },
  { id: 2, name: "yellow", color: "255, 255, 0" },
  { id: 3, name: "green", color: "0, 128, 0" },
  { id: 4, name: "blue", color: "0, 0, 255" },
];
