import React from "react";
import "../Introduce/Introduce.css";

function Introduce() {
  return (
    <div className="introduce">
      <div className="userProfileContainer">
        <img alt="user profile image" src="/images/cat.jpeg" />
        <div>
          <p>문유현</p>
          <p>45기</p>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
