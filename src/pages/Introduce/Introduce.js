import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ColorBox from "./ColorBox";
import "./Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();

  const handleInput = (e) => {
    console.log("input 태그 동작");
    // console.log(e.target.value)
  };

  const handleButton = () => {
    console.log("button 태그 동작");
    navigate("/product");
  };

  return (
    <div className="introduce">
      <div className="profileBox">
        <img
          alt="mm"
          className="profile"
          src="/images/mm.jpg"
          width="300"
        ></img>
        <div></div>
        <div className="name">박현아</div>
        <div className="generation">45기</div>
        <input className="txt" type="text" onChange={handleInput}></input>
        <input
          className="btn"
          type="button"
          value="클릭"
          onClick={handleButton}
        ></input>
        <div>
          <Link to="/product">Product 페이지로 이동</Link>
        </div>
      </div>
      <div className="colorPart">
        {COLOR_INTRO.map((info) => (
          <ColorBox key={info.id} name={info.name} rgb={info.rgb} />
        ))}
      </div>
    </div>
  );
};

export default Introduce;

const COLOR_INTRO = [
  { id: 0, name: "red", rgb: "255, 0, 0" },
  { id: 1, name: "yellow", rgb: "255, 255, 0" },
  { id: 2, name: "green", rgb: "0, 128, 0" },
  { id: 3, name: "blue", rgb: "0, 0, 255" },
];
