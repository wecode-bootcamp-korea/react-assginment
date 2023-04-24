import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate("/product");
  };
  return (
    <div className="introduce">
      <div className="box">
        <img
          alt="프로필 사진"
          src="https://avatars.githubusercontent.com/u/52394741?s=200&v=4"
        ></img>
        <span className="name">연정아</span>
        <span className="session">45기</span>
        <div className="search">
          <input />
          <button onClick={handleBtn}>입력</button>
        </div>
        <Link to="/product">
          <span>product 페이지로 이동</span>
        </Link>
      </div>
    </div>
  );
};

export default Introduce;
