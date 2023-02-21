import React from "react";
import { Link } from "react-router-dom";

import "./Introduce.scss";
import "../../style/variables.scss";
import "../../style/mixin.scss";

const Introduce = () => {
  return (
    <div className="introduce">
      <div className="introduce-box">
        <div className="introduce-wecode">&gt;wecode</div>
        <div className="introduce-detail">
          <h1>장지아</h1>
          <h1>43기</h1>
          <div className="input-box">
            <input
              onChange={function handleInput() {
                console.log("input 태그 동작");
              }}
            />
            <button
              onClick={() => {
                window.location.href = "/product";
              }}
            >
              클릭
            </button>
          </div>
          <Link to="/product">product 페이지로 이동</Link>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
