import React from "react";
import './Introduce.scss'


const Introduce = () => {
  return (
    <div className="introduce">
      <article className="container">
        <img alt="main_img" className="profileImg" src="images/golf-ball-yellow.jpg"></img>
        <p className="profileName">김태원</p>
        <p className="generation">45기</p>
      </article>
    </div>
  );
}

export default Introduce;