import React from "react";
import "./Count.scss";

const Count = () => {
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => {}}>-</button>
        <div className="countInputText">1</div>
        <button onClick={() => {}}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {}}>
        reset
      </button>
    </div>
  );
};

export default Count;
