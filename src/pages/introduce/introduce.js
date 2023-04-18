import React from "react";
import "./introduce.scss";

function handleInput() {
  console.log("input 태그 동작");
}

function handleButton() {
  alert("잘 부탁드립니다");
  console.log("button 태그 동작");
}

const Profile = () => {
  return (
    <div className="container">
      <img src="/images/me.jpg" />
      <p className="content" id="이경진">
        이경진
      </p>
      <p className="content" id="기수">
        45기
      </p>
      <div className="search">
        <input type="text" onChange={handleInput}></input>
        <button onClick={handleButton}>클릭</button>
      </div>
    </div>
  );
};

export default Profile;
