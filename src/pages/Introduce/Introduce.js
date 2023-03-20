import React, { useState } from "react";
import "./Introduce.scss"

function HandleInput (){
  console.log("input 태그 동작")
}

function HandleButton(){
  console.log("button 태그 동작")
}

function Introduce () {
  return(
    <div className="profileWrap">
      <div className="profileCard">
        <div className="profileImage" alt="profile-img"></div>
        <div className="userName">
          <span className="name">최선영</span>
          <span className="thNum">44기</span>
        </div>
        <div className="commentWrap">
          <input
            className="input"
            type="text"
            placeholder="댓글"
            onChange={HandleInput}
          >
          </input>
          <button 
            className="button"
            onClick={HandleButton}
          >
            클릭
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduce;