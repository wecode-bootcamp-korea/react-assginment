import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [number, setNumber] = useState(1);

  const increase = () => {
    setNumber(number + 1);
    // setNumber((prev)=>prev +1)
  };

  const decrease = () => {
    //1. return number > 1 ? setNumber(number - 1) : false; //false -> return 으로 변경

    //2. else생략 가능
    // if (number <= 1) {
    //   return;
    // } else {
    //   setNumber(number - 1);
    // }

    if (number <= 1) {
      return;
    }
    setNumber(number - 1);
  };

  const resetNum = () => {
    setNumber(1);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            decrease();
          }}
        >
          -
        </button>
        <div className="countInputText">{number}</div>
        <button
          onClick={() => {
            increase();
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          resetNum();
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
