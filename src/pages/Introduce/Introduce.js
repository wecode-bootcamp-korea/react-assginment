import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import Product from "../Product/Product";
import "./Introduce.scss";


const Introduce = () => {
  const [input, setInput] = useState("");
  const [button, setButton] = useState("");

  const HandleInput = (e) => {
    console.log("input 태그 동작");
  };

  const Handlebutton = (e) => {
    console.log("button 태그 동작");
  };



  return (
    <form className="introduce">
      <div className="profileFrame">
        <img className="profileImg" />
        <div className="nameArea">
          <span className="profileName">신효민</span>
          <span className="profileSub">44기</span>
          <span className="inputArea">
          <input
            onChange={(e) => {
              HandleInput(e);
            }}
          />
          <Link to="/product"> <button> 클릭 </button> </Link>
          </span>
          <Link to="/product">product 페이지로 이동</Link>
        </div>
      </div>
    </form>
  );
};

export default Introduce;
