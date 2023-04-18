import React from "react";
import "./Introduce.scss";

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
      </div>
    </div>
  );
};

export default Introduce;
