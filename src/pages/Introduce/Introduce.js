import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import IntroColor from "../IntroColor/IntroColor.js"
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
    navigate("/product");
  }

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
            <button onClick={goToMain}> 클릭 </button>
          </span>
          <span>
            <Link to="/product">product 페이지로 이동</Link>
          </span>
        </div>
      </div>
      <div className="colorDiv">
        {
          COLOR_LIST.map(colorChart => 
            <IntroColor key={colorChart.id} name={colorChart.name} colorRGB={colorChart.colorRGB} />
          )
        }
      </div>
    </form>
  );
};

const COLOR_LIST = [
  {
    id: 1,
    name: 'red',
    colorRGB: '255, 0, 0',
  },
  {
    id: 2,
    name: 'yellow',
    colorRGB: '255, 255, 0',
  },
  {
    id: 3,
    name: 'green',
    colorRGB: '0, 128, 0',
  },
  {
    id: 4,
    name: 'blue',
    colorRGB: '0, 0, 255',
  },
]

export default Introduce;
