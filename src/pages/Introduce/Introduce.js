import React from "react";
import './Introduce.scss'

const handleInput = () => {
  console.log('input 태그 동작');
}

const hnadleButton = () => {
  console.log('button 태그 동작');
}

const Introduce = () => {
  return (
    <div className="introduce">
      <article className="container">
        <img alt="main_img" className="profileImg" src="images/golf-ball-yellow.jpg"></img>
        <p className="profileName">김태원</p>
        <p className="generation">45기</p>
        <input type="text" className="inputBox" onChange={handleInput}></input>
        <button className="post" onClick={hnadleButton}>클릭</button>
      </article>
    </div>
  );
}

export default Introduce;