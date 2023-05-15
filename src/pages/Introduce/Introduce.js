import React from "react";
import { flushSync } from "react-dom";

import "./Introduce.css";

function Introduce() {
  function handleButton() {
    console.log("button 태그 동작");
  }

  function handleInput() {
    console.log("input 태그 동작");
  }

  return (
    <div className="wecode">
      <div className="Wrap">
        <div className="image">>wecode</div>
        <p className="Name">김민정</p>
        <p className="Number">46기 </p>

        <div className="btnWrap">
          <input type={"Text"} onChange={handleInput} />
          <button onClick={handleButton}>클릭</button>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
