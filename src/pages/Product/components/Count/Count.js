import React, { useState } from "react";
import "./Count.scss";

const Count = (props) => {
  const { num, setNum } = props;

  const increase = () => {
    setNum(num + 1);
  };

  // const decrease = () => {
  //   setNumber(num - 1);
  // };
  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            setNum(num - 1);
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
          setNum(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
