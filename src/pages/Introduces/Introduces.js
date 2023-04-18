import React from "react";
import "./Introduce.scss";
import { Link } from "react-router-dom";

const Introduce = () => {
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
          <Link to="/product">
            <button>입력</button>
          </Link>
        </div>
        <Link to="/product">
          <span>product 페이지로 이동</span>
        </Link>
      </div>
    </div>
  );
};

export default Introduce;
