import React, { useState } from "react";
import "./Count.scss";

const Count = (props) => {
  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            props.countNumber > 1
              ? props.setCountNumber(props.countNumber - 1)
              : props.setCountNumber(1);
          }}
        >
          -
        </button>
        <div className="countInputText">{props.countNumber}</div>
        <button
          onClick={() => {
            props.setCountNumber(props.countNumber + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          props.setCountNumber(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
