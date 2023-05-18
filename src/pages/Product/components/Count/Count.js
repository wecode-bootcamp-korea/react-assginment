import React, { useState } from "react";
import "./Count.scss";

const Count = (props) => {
  let [nums, setNums] = useState(1);

  function minus() {
    if (props.nums > 1) {
      return props.setNums(props.nums - 1);
    } else {
      return 1;
    }
  }

  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            minus();
          }}
        >
          -
        </button>
        <div className="countInputText">{props.nums}</div>
        <button
          onClick={() => {
            props.setNums(props.nums + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          props.setNums(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
