import React from "react";
import "../Introduce/Introduce.css";

const abcName = () => {
  return (
    <div className="outLine">
      <div className="logobox">
        <h1 className="text">wecode</h1>
      </div>
      <p className="name"> 이기태</p>
      <p className="th"> 43기</p>
      <form>
        <input type="text" onChange={handleInput} />
        <button type="button" className="login_btn" onClick={handleButton}>
          버튼
        </button>
      </form>
    </div>
  );
};

function handleInput() {
  console.log("input 태그동작");
}
function handleButton() {
  console.log("button 태그 동작");
}
export default abcName;
