import React, { useState } from "react";
import "./Count.scss";

const Count = (props) => {
  const countMinus = () => {
    props.num > 1 ? props.setNum(Number(props.num) - 1) : props.setNum("1");
  };

  const countPlus = () => {
    props.setNum(Number(props.num) + 1);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={countMinus}>-</button>
        <div className="countInputText">{props.num}</div>
        <button onClick={countPlus}>+</button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          props.setNum("1");
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
