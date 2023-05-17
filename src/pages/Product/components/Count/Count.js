import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  let [nums, setNums] = useState(1);

  function minus() {
    if (nums > 1) {
      return setNums(nums - 1);
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
        <div className="countInputText">{nums}</div>
        <button
          onClick={() => {
            setNums(nums + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          setNums(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
