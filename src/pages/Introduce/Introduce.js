import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Product from "../Product/Product";
import Color from "../Product/components/Color/Color";
import Count from "../Product/components/Count/Count";
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
  
  const navigate = useNavigate();
  function goToMain() {
    navigate('/product');
  }


  return (
    <form className="introduce">
      <div className="profileFrame">
        <img className="profileImg"/>
        <div className="nameArea">
          <span className="profileName">신효민</span>
          <span className="profileSub">44기</span>
          <span className="inputArea">
          <input
            onChange={(e) => {
              HandleInput(e);
            }}
          />
          <button onClick={goToMain}> 클릭 </button>
          </span>
          <span>
            <Link to="/product">product </Link>
            <Link to="/Color">Color</Link>
            <Link to="/Count">Count</Link>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Introduce;
