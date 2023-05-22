import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Introduce.scss";

function Introduce() {
  const navigate = useNavigate();

  function handleInput() {
    console.log("input 태그 동작");
  }

  function handleButton() {
    console.log("button 태그 동작");
    navigate("/product");
  }

  return (
    <>
      <div className="introduce">
        <div className="card-box">
          <div className="wecode">
            <p>>wecode</p>
          </div>
          <h4 className="name">이재웅</h4>
          <p>46기</p>
          <input type="text" onChange={handleInput} />
          <button onClick={handleButton}>클릭</button>
          <div>
            <Link to="/product">product페이지로 이동</Link>
          </div>
        </div>
      </div>
      <div className="introduce">
        {CARD_INFO_LIST.map((info) => (
          <div className="card">
            <div className={`color ${info.className}`}></div>
            <h4 className="name">이름 : {info.name}</h4>
            <p>rgb : {info.rgb}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Introduce;

const CARD_INFO_LIST = [
  { id: 1, className: "red", name: "red", rgb: "255,0,0" },
  { id: 2, className: "yellow", name: "yellow", rgb: "255,255,0" },
  { id: 3, className: "green", name: "green", rgb: "0,128,0" },
  { id: 4, className: "blue", name: "blue", rgb: "0,0,255" }
];
