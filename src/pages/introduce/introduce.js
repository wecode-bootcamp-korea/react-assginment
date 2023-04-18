import React from "react";
import "./introduce.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function handleInput() {
  console.log("input 태그 동작");
}

function handleButton() {
  alert("잘 부탁드립니다");
  console.log("button 태그 동작");
}

const Profile = () => {
  const navigate = useNavigate();
  const ToProduct = () => {
    navigate("/product");
  };

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
        <button onClick={ToProduct}>클릭</button>
      </div>
      <Link to="/product" className="link">
        Product로 이동
      </Link>
    </div>
  );
};

export default Profile;
