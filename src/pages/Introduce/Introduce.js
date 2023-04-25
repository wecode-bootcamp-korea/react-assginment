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
    <div className="introduce">
      <div className="introduceform">
        <img
          className="introduceimg"
          src="/images/ZzangGu.jpg"
          alt="자기소개 이미지"
        />
        <div className="info">
          <div className="name">
            <h2>이소진</h2>
          </div>
          <h3>45기</h3>
          <input onChange={handleInput} className="inputMotion" type="text" />
          <button onClick={handleButton} className="buttonMotion">
            클릭
          </button>
          <Link to="/product">product 페이지로 이동</Link>
        </div>
      </div>
      <div className="cards">
        {INTRODUCE_CARD.map((color) => {
          return (
            <div className="colorcard">
              <div className={`color ${color.className}`} />
              <div className="colorcontainer">
                {color.name}
                <br />
                {color.rgb}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Introduce;

const INTRODUCE_CARD = [
  { id: 1, className: "red", name: "이름 : red", rgb: "rgb : 255,0,0" },
  { id: 2, className: "yellow", name: "이름 : yellow", rgb: "rgb : 255,255,0" },
  { id: 3, className: "green", name: "이름: green", rgb: "rgb : 0,128,0" },
  { id: 4, className: "blue", name: "이름 : blue", rgb: "rgb : 0,0,255" },
];
