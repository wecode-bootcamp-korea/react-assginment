import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Introduce/Introduce.scss";

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
    <div className="introduce">
      <div className="userProfile">
        <img
          alt="user profile"
          src="/images/cat.jpeg"
          className="userProfileImg"
        />
        <div className="userProfileInfo">
          <div className="userProfileInfoText">
            <p className="userProfileInfoTextName">문유현</p>
            <p className="userProfileInfoTextClass">45기</p>
          </div>
          <form className="userProfileInfoForm">
            <input
              type="text"
              onChange={handleInput}
              className="userProfileInfoFormInput"
            />
            <button
              type="button"
              onClick={handleButton}
              className="userProfileInfoFormBtn"
            >
              클릭
            </button>
          </form>
        </div>
        <Link className="userProfileLink" to="/product">
          product 페이지로 이동
        </Link>
      </div>
    </div>
  );
}

export default Introduce;
