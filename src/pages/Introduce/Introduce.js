import React, { useState } from "react";
import "./Introduce.scss"

function Introduce () {
  return(
    <div className="profileWrap">
      <div className="profileCard">
        <div className="profileImage" alt="profile-img"></div>
        <div className="userName">
        <span className="name">최선영</span>
        <span className="thNum">44기</span>
        </div>
      </div>
    </div>
  );
};

export default Introduce;