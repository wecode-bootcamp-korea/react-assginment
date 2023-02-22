import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();
  const handleChange = () => {
    console.log("input 태그 동작");
  };

  const handleClick = () => {
    console.log("button 태그 동작");
    navigate("/product");
  };

  return (
    <div className="introduce">
      <section className="main">
        <div className="content">＞wecode</div>
      </section>
      <section className="userInfo">
        <div className="user">
          <b className="userName">김진평</b>
          <br />
          43기
          <br />
          <input type="text" className="inputText" onChange={handleChange} />
          <button className="button" onClick={handleClick}>
            클릭
          </button>
          <Link to="/product" className="linkToProduct">
            product 페이지로 이동
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Introduce;
