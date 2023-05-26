import React from "react";
import titleImage from "../../images/images.png";
import { Link, useNavigate } from "react-router-dom";
import "../Introduce/Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();

  function handleInput() {
    console.log("input 태그 동작");
  }

  function handleButton() {
    <Link to="/product">product 페이지로 이동</Link>;
    navigate("/product");
  }

  return (
    <>
      <div className="introduce">
        <img src={titleImage} alt="main" className="mainImage" />
        <p className="name">옥준우</p>
        <p className="number">46기</p>
        <div className="wrap">
          <input type="text" onChange={handleInput} />
          <button onClick={handleButton}>클릭</button>
        </div>
        <Link to="/product">product 페이지로 이동</Link>
      </div>
      <div className="color-card-list">
        {COLOR_CARD_INFO.map((card) => {
          return (
            <div className="color-card" key={card.id}>
              <div className={`color-card-background ${card.name}`} />
              <div>이름: {card.name}</div>
              <div>rgb: {card.rgb}</div>
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
