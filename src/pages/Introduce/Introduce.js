import React from "react";
import styles from "./introduce.css";
const Self = () => {
  return (
    <div className="main">
      <img alt="myPicture" src="img/비니비니.jpg"></img>
      <div className="information">
        <p>
          <b>문은빈</b>
        </p>
        <p>43기</p>
        <date className="inputInfo">
          <input type={Text} onChange={handleInput}></input>
          <button onClick={handleButton}>클릭</button>
        </date>
      </div>
    </div>
  );
};

function handleInput() {
  console.log("input 태그 동작");
}

function handleButton() {
  console.log("button 태그 동작");
}
export default Self;
