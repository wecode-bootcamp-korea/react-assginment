import React from "react";
import "./Introduce.scss";
import { Link, useNavigate } from "react-router-dom";

function Introduce() {
  function handleInput() {
    console.log("input 태그 동작");
  }
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/product");
    console.log("button 태그 동작");
  };
  return (
    <div className="Introduction">
      <div className="container">
        <div className="informationcontainer">
          <img
            src="/images/golf-ball-red.jpg"
            alt="ballimage"
            className="ballimage"
          />
          <div className="letter">
            <h1>권순우</h1>
            <h2>49기</h2>
          </div>
          <div className="InputnButton">
            <input onChange={handleInput}></input>
            <button onClick={handleButton}>클릭</button>
          </div>
          <p>
            <Link to="/product">product 페이지로 이동</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
