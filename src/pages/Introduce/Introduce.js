import React, { useState } from "react";
import "./Introduce.css";

function MissionOne() {
  const [InputValue, inputTag] = useState("");
  const [ButtonValue, buttonTag] = useState("");

  function HandleInput(e) {
    inputTag(e.target.value);
    console.log("input 태그 동작");
  }

  function HandleButton(e) {
    buttonTag(e.target.value);
    console.log("button 태그 동작");
  }
  return (
    <>
      <div className="container">
        <div className="photo">
          <img alt="hambbang" src="images/IMG_7632.JPG" />
        </div>
        <div className="letters">
          <p className="name">양회진</p>
          <p className="number">47기</p>
        </div>
        <div className="inputButton">
          <input id="input" value={InputValue} onChange={HandleInput}></input>
          <button id="button" value={ButtonValue} onClick={HandleButton}>
            클릭
          </button>
        </div>
      </div>
    </>
  );
}

export default MissionOne;
