import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./introduce.scss";

const colorData = [
  { id: 1, name: `red`, rgb: `255, 0, 0` },
  { id: 2, name: `yellow`, rgb: `255, 255, 0` },
  { id: 3, name: `green`, rgb: `0, 128, 0` },
  { id: 4, name: `blue`, rgb: `0, 0, 255` },
];
const Introduce = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    console.log("button 태그 동작");
    navigate("/product");
  };
  const handleInput = () => {
    console.log("input 태그 동작");
  };

  return (
    <>
      <div className="flexBox">
        <div className="wrap">
          <div className="profileBackgroundColor">
            <p className="wecode"> &gt; wecode </p>
          </div>
          <div className="profile">
            <span className="bold">김지연</span>
            <br />
            <span>46기</span>
            <br />
          </div>

          <input className="inputText" type="text" onChange={handleInput} />

          <button className="clickBtn" onClick={handleButton}>
            클릭
          </button>

          <Link to="Product">
            <span className="moveToProductPage">product 페이지로 이동</span>
          </Link>
        </div>
      </div>
      <div className="flexBox">
        {colorData.map((props) => {
          return (
            <div className="colorChipWrap">
              <div className={`colorChip ${props.name}`}></div>
              <div className="profile">
                <span className="bold">{"이름: " + props.name}</span>
                <br />
                <span>{"rgb: " + props.rgb}</span>
                <br />
              </div>
            </div>
          );
        })}{" "}
      </div>
    </>
  );
};
export default Introduce;
