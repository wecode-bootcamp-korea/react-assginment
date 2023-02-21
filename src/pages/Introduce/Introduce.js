import React from "react";
import "./Introduce.scss";
import Profile from "./img/KakaoTalk_20230213_204309040.jpg";
import { Link, useNavigate } from "react-router-dom";

const Introduction = () => {
  const navigate = useNavigate();

  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const moveButton = () => {
    navigate("/product ");
  };

  return (
    <main>
      <div className="introduce">
        <div className="wrap">
          <img src={Profile} alt="" />
          <p>
            신정호
            <br />
            43기
          </p>
          <input onChange={handleInput} type="text" />
          <button onClick={moveButton}>클릭</button>
          <Link to="/product">product페이지로 이동</Link>
        </div>
      </div>
    </main>
  );
};
export default Introduction;
