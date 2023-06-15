import React from "react";
import "./Introduce.scss";
import { Link } from "react-router-dom";




function Introduce() {
  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const handleButton = () => {
    console.log("button 태그 동작");
  };

  return (
    <div className="introduce">
      <img className="wecodeImg" src="images/wecode.png" alt="wecodeLogo" />
      <div className="text">
        <p className="name">이지원</p>
        <p className="num">47기</p>
        <input className="input" type="text" placeholder="입력" onChange={handleInput} />
        <p className="move"><Link to="/Product">product 페이지로 이동</Link></p>
        <button className="btn" onClick={handleButton}>Click</button>
      </div>
    </div>
  );
}

export default Introduce;
