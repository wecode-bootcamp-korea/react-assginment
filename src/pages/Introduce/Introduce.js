import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { INTRODUCE_COLOR } from "./ColorCard";
import "./Introduce.scss";

function Introduce() {
  const navigate = useNavigate();

  function HandleInput() {
    console.log("input 태그 동작");
  }

  function HandleButton() {
    navigate("/product");
  }
  return (
    <div className="introduce">
      <div className="container">
        <img className="photo" alt="hambbang" src="images/IMG_7632.JPG" />
        <div className="letters">
          <p className="name">양회진</p>
          <p className="number">47기</p>
        </div>
        <div className="inputButton">
          <input id="input" onChange={HandleInput}></input>
          <button id="button" onClick={HandleButton}>
            클릭
          </button>
          <br />
          <Link to="/product">move to Product page</Link>
        </div>
      </div>
      <div className="allCard">
        {INTRODUCE_COLOR.map((ele) => {
          return (
            <div className="card" key={ele.id}>
              <div
                className="color"
                style={{ backgroundColor: `rgb(${ele.color})` }}
              ></div>
              <p className="name">이름 : {ele.name}</p>
              <p className="rgb">rgb : {ele.color}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Introduce;
