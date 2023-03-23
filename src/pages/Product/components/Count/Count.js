import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [num, setNumber] = useState(1);
  const increase = () => {
    setNumber(num + 1);
  };

  // const decrease = () => {
  //   setNumber(num - 1);
  // };
  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            setNumber(num - 1);
          }}
        >
          -
        </button>
        <div className="countInputText">{num}</div>
        <button onClick={increase}>+</button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          setNumber(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
