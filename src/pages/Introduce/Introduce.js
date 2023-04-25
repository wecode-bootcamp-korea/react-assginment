import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ColorBox from "../Product/components/ColorBox/ColorBox";
import "./Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();
  const handleInput = () => {
    console.log("input 태그 동작");
  };
  const handleButton = () => {
    navigate("/product");
  };

  return (
    <>
      <div className="introduce">
        <div className="box">
          <img className="picture" src="/images/cat.jpeg" alt=""></img>
          <h1>전승범</h1>
          <h2>45기</h2>
          <input onChange={handleInput}></input>
          <button onClick={handleButton}>클릭</button>
          <Link to={"/product"}>프로덕트</Link>
        </div>
        <div className="colorCardBox">
          {colorCardList.map((item) => (
            <ColorBox key={item.id} name={item.name} rgb={item.rgb} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Introduce;

const colorCardList = [
  { id: 1, name: "red", rgb: "255,0,0" },
  { id: 2, name: "yellow", rgb: "255,255,0" },
  { id: 3, name: "green", rgb: "0,128,0" },
  { id: 4, name: "blue", rgb: "0,0,255" },
];
