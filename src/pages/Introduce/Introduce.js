import React from "react";
import "./Introduce.css";
import image_picture from "../../img/ko_592_1.jpg";
import { Link, useNavigate } from "react-router-dom";

const handleInput = () => {
  console.log("input 태그 동작");
};

const Introduce = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/Product");
  };

  return (
    <div className="container">
      <div className="main">
        <div className="main_image">
          <img src={image_picture} alt="hoshino_ai" className="image"></img>
        </div>
        <div className="main_text">
          <span className="user_nick">개쩌는 개발자</span>
          <span className="user_name">49기 김종완</span>
        </div>
        <div className="main_input_box">
          <input className="profile_input" onChange={handleInput}></input>
          <button className="profile_button" onClick={goToMain}>
            검색
          </button>
        </div>
        <div className="link">
          <Link to="/Product" className="linkButton">
            신세계로 가는 버튼
          </Link>
          ;
        </div>
      </div>
    </div>
  );
};

export default Introduce;
