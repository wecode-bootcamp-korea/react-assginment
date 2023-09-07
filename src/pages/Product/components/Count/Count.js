import React from "react";
import "./Count.scss";

const Count = (props) => {
  const numberPlus = () => {
    props.setCount(props.count + 1);
  };
  const numberMinus = () => {
    if (props.count === 1) {
      console.log("감소시킬 수 없습니다!");
    } else {
      props.setCount(props.count - 1);
    }
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={numberMinus}>-</button>
        <div className="countInputText">{props.count}</div>
        <button onClick={numberPlus}>+</button>
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
