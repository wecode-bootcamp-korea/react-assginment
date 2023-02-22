import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();

  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const goToProduct = () => {
    navigate("/product");
    console.log("button 태그 동작");
  };

  return (
    <nav className="introduce">
      <div className="wecodeWrap">
        <h1 className="wecode">> wecode</h1>
        <p className="name">권유정</p>
        <p className="class">43기</p>
        <input onChange={handleInput} />
        <button onClick={goToProduct}>클릭</button>
        <Link to="/product">
          <p className="moveToProduct">product 페이지로 이동</p>
        </Link>
      </div>
    </nav>
  );
};

export default Introduce;
