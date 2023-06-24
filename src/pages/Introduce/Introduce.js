import React from "react";
import "./Introduce.scss";
import { COLOR_CARDS } from "./ColorCardData";
import { Link } from "react-router-dom";

function Introduce() {
  const handleInput = () => {
    console.log("input 태그 동작")
  };

  const handleButton = () => {
    console.log("button 태그 동작")
  };

  return (
    <div className="introduce">
      <img className="wecodeImg" src="images/wecode.png" alt="wecodeLogo" />
      <div className="text">
        <p className="name">이지원</p>
        <p className="num">47기</p>
        <input className="input" type="text" placeholder="입력" onChange={handleInput} />
        <p className="move"><Link to="/Product">product 페이지로 이동</Link></p>
        <button className="btn" onClick={handleButton}><Link to="/Product">Click</Link></button>
      </div>
      <div className="cards">
        {COLOR_CARDS.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div
                className="color"
                style={{ backgroundColor: `rgb(${element.color})` }}
              ></div>
              <p className="name">이름 : {element.name}</p>
              <p className="rgb">rgb : {element.color}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Introduce;
