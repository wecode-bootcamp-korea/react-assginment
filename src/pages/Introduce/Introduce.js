import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Introduce.scss";
import "../../style/variables.scss";
import "../../style/mixin.scss";

const Introduce = () => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate("/product");
  };

  const handleInput = () => {
    console.log("input 태그 동작");
  };

  return (
    <div className="introduce">
      <div className="introduce-box">
        <div className="introduce-wecode">&gt;wecode</div>
        <div className="introduce-detail">
          <h2>장지아</h2>
          <h2>43기</h2>
          <div className="input-box">
            <input onChange={handleInput} />
            <button onClick={goToProduct}>클릭</button>
          </div>
          <Link to="/product">product 페이지로 이동</Link>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
