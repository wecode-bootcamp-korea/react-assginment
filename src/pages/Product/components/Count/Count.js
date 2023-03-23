import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [countNumber, setCountNumber] = useState(1);

  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            countNumber > 1
              ? setCountNumber(countNumber - 1)
              : setCountNumber(1);
          }}
        >
          -
        </button>
        <div className="countInputText">{countNumber}</div>
        <button
          onClick={() => {
            setCountNumber(countNumber + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          setCountNumber(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
