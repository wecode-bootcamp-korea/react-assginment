import React, { useState } from "react";
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
    <form>
      <div className="profileFrame">
        <img className="profileImg" />
        <span className="profileName">신효민</span>
        <span className="profileSub">44기</span>
        <span className="inputArea">
          <input
            onChange={(e) => {
              HandleInput(e);
            }}
          />
          <button
            onClick={(e) => {
              Handlebutton(e);
              e.preventDefault(e);
            }}
          > 클릭 </button>
        </span>
      </div>
    </form>
  );
};

export default Introduce;
