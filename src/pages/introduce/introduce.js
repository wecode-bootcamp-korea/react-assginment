import React from "react";
import "./introduce.scss";

const Profile = () => {
  return (
    <div class="container">
      <img src="/images/me.jpg" />
      <p class="content" id="이경진">
        이경진
      </p>
      <p class="content" id="기수">
        45기
      </p>
      <div class="search">
        <input type="text"></input>
        <button>클릭</button>
      </div>
    </div>
  );
};

export default Profile;
