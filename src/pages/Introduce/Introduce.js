import React from "react";
import "./Introduce.css";

function Introduce() {
  const handleInput = () => {
    console.log("input 태그 동작");
  };
  const handleButton = () => {
    console.log("button 태그 동작");
  };

  return (
    <>
      <main>
        <div className="box">
          <img alt="위코드로고" src="images/wecode.webp" />
          <p className="name">조수진</p>
          <p className="number">46기</p>
          <div className="boxBottom">
            <input onChange={handleInput}></input>
            <button onClick={handleButton}>클릭</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Introduce;
