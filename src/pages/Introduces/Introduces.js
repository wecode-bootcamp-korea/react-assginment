import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ColorBox from "./ColorBox";
import "./Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate("/product");
  };
  return (
    <div className="introduce">
      <div className="box">
        <img
          alt="프로필 사진"
          src="https://avatars.githubusercontent.com/u/52394741?s=200&v=4"
        ></img>
        <span className="name">연정아</span>
        <span className="session">45기</span>
        <div className="search">
          <input />
          <button onClick={handleBtn}>입력</button>
        </div>
        <Link to="/product">
          <span>product 페이지로 이동</span>
        </Link>
      </div>
      <div className="colorBoxes">
        {COLOR_INFO.map((colorItem) => (
          <ColorBox
            key={colorItem.id}
            color={colorItem.color}
            name={colorItem.name}
            rgb={colorItem.rgb}
          />
        ))}
      </div>
    </div>
  );
};

export default Introduce;

const COLOR_INFO = [
  { id: 1, color: "red", name: "red", rgb: "255, 0, 0" },
  { id: 2, color: "yellow", name: "yellow", rgb: "255, 255, 0" },
  { id: 3, color: "green", name: "green", rgb: "0, 128, 0" },
  { id: 4, color: "blue", name: "blue", rgb: "0, 0, 255" },
];
