import React from "react";
import "../Introduce/Introduce.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Introduce() {
  const navigate = useNavigate();

  const handleButton = () => {
    console.log("button 태그 동작");
    navigate("/product");
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
        <Link to="/product">product 페이지로 이동</Link>
      </div>
    </div>
  );
}

export default Introduce;
