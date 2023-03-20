import React from "react";

import "./Introduce.scss";

const Introduce = () => {
  //const [inputValue, setInputValue] = usestate(" ");

  const HandleInput = () => {
    console.log("input태그 동작");
  };

  const HandleButton = (e) => {
    e.preventDefault();
    console.log("button태그 동작");
  };

  return (
    <div className="box">
      <div className="image"></div>
      <p>44기 조건호</p>
      <form>
        <input
          type="text"
          onChange={(e) => {
            HandleInput(e);
          }}
        />
        <button onClick={HandleButton}>클릭</button>
      </form>
    </div>
  );
};

export default Introduce;
