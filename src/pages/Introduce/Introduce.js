import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();

  return (
    <div className="introduce">
      <div className="wrapper">
        <img className="profile-img" src="/images/cat.jpeg" alt="" />
        <div className="profile-info">
          <div className="name">김희연</div>
          <div className="cohort-number">45기</div>
          <Input />
          <Button link={navigate} />
          <div>
            <Link to="/product">product 페이지로 이동</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Input = () => {
  const handleInput = () => {
    console.log("input 태그 동작");
  };
  return <input type="text" className="input" onChange={handleInput} />;
};

export const Button = (props) => {
  const handleButton = () => {
    console.log("button 태그 동작");
    props.link("/product");
  };

  return (
    <button className="btn" onClick={handleButton}>
      클릭
    </button>
  );
};

export default Introduce;
