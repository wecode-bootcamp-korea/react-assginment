import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
    const [number, setNumber] = useState(1);

    const increment = () => {
      setNumber(number + 1);
    }

    const decrement = () => {
     if (number -1 >=0) {
      setNumber(number -1);
     }
     else {
      setNumber(0);
     }
    }

    const resetBtn = () => {
      setNumber(0);
    }

    

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={decrement}>-</button>
        <div className="countInputText">{number}</div>
        <button onClick={increment}>+</button>
      </div>
      <button className="resetBtn" onClick={resetBtn}>
        reset
      </button>
    </div>
  );
};

export default Count;
