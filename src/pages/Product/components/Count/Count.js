import React, { useState } from "react";
import "./Count.scss";

const Count = (props) => {
  // const [number, setNumber] = useState(1);

  return (
    <div className="count">
      <div className="countInput">
        <button
          className="countBtn"
          onClick={() => {
            props.setNumber((prev) => {
              if (prev > 1) {
                return (prev = prev - 1);
              }

              return (prev = 1);
            });
          }}
        >
          -
        </button>
        <div className="countInputText">{props.number}</div>
        <button
          className="countBtn"
          onClick={() => {
            props.setNumber((prev) => (prev = prev + 1));
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          props.setNumber(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
