import React from "react";
import "../Introduce/Introduce.css";

function Introduce() {
  const handleButton = () => {
    console.log("button 태그 동작");
  };

  const handleInput = () => {
    console.log("input 태그 동작");
  };

  return (
    <div className="introduce" style={{ boxSizing: "border-box" }}>
      <div className="userProfileContainer">
        <img alt="user profile image" src="/images/cat.jpeg" />
        <div className="bottomWrapper">
          <div>
            <p>문유현</p>
            <p>45기</p>
          </div>
          <form>
            <input type="text" onChange={handleInput} />
            <button type="button" onClick={handleButton}>
              클릭
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
