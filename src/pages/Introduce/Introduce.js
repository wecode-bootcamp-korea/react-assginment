import React from "react";
import { Link } from "react-router-dom";
import "../Introduce/Introduce.css";

const Introduce = () => {
  return (
    <div className="outLine">
      <div className="logobox">
        <h1 className="text">wecode</h1>
      </div>
      <p className="name"> 이기태</p>
      <p className="th"> 43기</p>
      <form>
        <input type="text" onChange={handleInput} />
        <Link to="/product">
          <button type="button" className="login_btn" onClick={handleButton}>
            클릭
          </button>
        </Link>
      </form>

      <p className="moveToProduct">
        <Link to="/product">Product 페이지로 이동</Link>
      </p>
    </div>
  );
};

function handleInput() {
  console.log("input 태그동작");
}
function handleButton() {
  console.log("button 태그 동작");
}
export default Introduce;
