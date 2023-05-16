import React from "react";
import "./Introduce.css";
import { Link } from "react-router-dom";

function Introduce() {
  const handleInput = () => {
    console.log("input 태그 동작");
  }
  const handleButton = () => {
    console.log("button 태그 동작");
  }

  return (
    <div className="container">
      <img className="profile-pic" src="https://cdn.pixabay.com/photo/2023/05/15/11/43/11-43-23-560_960_720.jpg" alt="profile picture"/>
      <div className="name">조혜진</div>
      <div className="batch">46기</div>
      <input type="text" onChange={handleInput} />
      <Link to="/product"><button onClick={handleButton}>클릭</button></Link>
      <br/>
      <Link to="/product">product 페이지로 이동</Link>
    </div>
  );
};

export default Introduce;