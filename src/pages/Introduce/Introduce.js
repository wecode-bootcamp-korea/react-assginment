import React from "react";
import "./Introduce.css";
import image_picture from "../../img/ko_592_1.jpg";

const Introduce = () => {
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
      </div>
    </div>
  );
};

export default Introduce;
