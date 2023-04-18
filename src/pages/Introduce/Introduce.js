import React from "react";
import "./Introduce.scss";
import { Link } from "react-router-dom";

const Introduce = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <img className="profile-img" src="/images/cat.jpeg" alt="" />
        <div className="profile-info">
          <div className="name">김희연</div>
          <div className="cohort-number">45기</div>
          <Input />
          <Button />
          <div>
            <Link to="/product">product 페이지로 이동</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const handleInput = () => {
  console.log("input 태그 동작");
};

const handleButton = () => {
  console.log("button 태그 동작");
};

export const Input = () => {
  return <input type="text" className="input" onChange={handleInput} />;
};

export const Button = () => {
  return (
    <button className="btn" onClick={handleButton}>
      클릭
    </button>
  );
};

export default Introduce;
