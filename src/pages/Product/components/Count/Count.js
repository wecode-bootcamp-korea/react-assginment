import React, { useState } from "react";
import "./Count.scss";

const Count = (props) => {
  // const handleCount = value => {
  //   if(props.count+value===0) return;
  //   props.setCount(props.count+value);
  // }
  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            props.count > 1
              ? props.setCount(props.count - 1)
              : props.setCount(1);
            // handleCount(-1);
          }}
        >
          -
        </button>
        <div className="countInputText">{props.count}</div>
        <button
          onClick={() => {
            props.setCount(props.count + 1);
            // handleCount(1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          props.setCount(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
