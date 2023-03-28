import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();

  const logoname = "> wecode";

  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const handleButton = (e) => {
    e.preventDefault();
    navigate("/product");
    console.log("button 태그 동작");
  };

  return (
    <div className="body">
      <div className="introduce">
        <div className="container">
          <div className="logobox">
            <span>{logoname}</span>
          </div>
          <span className="name">박지연</span>
          <span className="class">44기</span>
          <form>
            <input type="text" onChange={handleInput} />
            <button onClick={handleButton}>클릭</button>
            <Link to="/product" className="link">
              상품보러 가기
            </Link>
          </form>
        </div>
      </div>
      <ul className="color-box">
        {COLOR.map((colorlist) => (
          <li>
            <div
              className="color-container"
              style={{ backgroundColor: colorlist.color }}
            />
            <p className="color-name">이름 : {colorlist.color}</p>
            <p className="rgb-name">rgb : {colorlist.rgb}</p>
          </li>
        ))}
        {/* <div className="color-container">
      <span className="color-name">이름 : red</span>
      <span className="rgb-name">rgb : 255,0,0</span>
    </div> */}
      </ul>
    </div>
  );
};

export default Introduce;

const COLOR = [
  { id: 1, color: "red", rgb: "255, 0, 0" },
  { id: 2, color: "yellow", rgb: "255, 255, 0" },
  { id: 3, color: "green", rgb: "0, 128, 0" },
  { id: 4, color: "blue", rgb: "0, 0, 255" },
];
