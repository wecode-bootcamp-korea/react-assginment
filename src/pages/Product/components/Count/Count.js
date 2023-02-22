import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [num, setNum] = useState("1");

  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            num > 1 ? setNum(Number(num) - 1) : setNum("1");
          }}
        >
          -
        </button>
        <div className="countInputText">{num}</div>
        <button
          onClick={() => {
            setNum(Number(num) + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          setNum("1");
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
