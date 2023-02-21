import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./introduce.css";

const Self = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <img alt="myPicture" src="img/비니비니.jpg"></img>
      <div className="information">
        <p>
          <b>문은빈</b>
        </p>
        <p>43기</p>
        <date className="inputInfo">
          <input type={Text}></input>
          <button onClick={() => navigate("/product")}>클릭</button>
        </date>
        <Link to="/product">Product 페이지로 이동!</Link>
      </div>
    </div>
  );
};

// function handleInput() {
//   console.log("input 태그 동작");
// }

// function handleButton() {
//   console.log("button 태그 동작");
// }
export default Self;
