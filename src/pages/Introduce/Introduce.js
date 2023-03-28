import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";
import Colorbox from "./ColorBox";

const Introduce = () => {
  //const [inputValue, setInputValue] = usestate(" ");

  const navigate = useNavigate();

  //바로 hook를 쓰지 않고 함수를 만들어서 쓸 때
  // const loginBtn = () => {
  //   navigate("./product");
  // };
  const HandleInput = () => {
    console.log("input 태그 동작");
  };

  const HandleButton = (e) => {
    e.preventDefault();
    console.log("button태그 동작");
    navigate("/product");
  };

  return (
    <div className="introduce">
      <div className="wrap">
        <div className="image"></div>
        <p className="name">44기 조건호</p>
        <form>
          <input
            className="input"
            type="text"
            onChange={(e) => {
              HandleInput(e);
            }}
          />
          <button
            className="button"
            onClick={(e) => {
              HandleButton(e);
            }}
          >
            클릭
          </button>
        </form>
        <Link className="link" to="/product">
          product 페이지로 넘어가기
        </Link>
      </div>
      <div className="boxs">
        {COLOR_BOX.map((color) => (
          <Colorbox key={color.id} name={color.name} rgb={color.rgb} />
        ))}
      </div>
    </div>
  );
};

export default Introduce;

const COLOR_BOX = [
  { id: 1, name: "red", rgb: "255,0,0" },
  { id: 2, name: "yellow", rgb: "255,255,0" },
  { id: 3, name: "green", rgb: "0,128,0" },
  { id: 4, name: "blue", rgb: "0,0,255" },
];
