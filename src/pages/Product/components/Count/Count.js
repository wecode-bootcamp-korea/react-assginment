import React, { useEffect } from "react";
import "./Count.scss";

const Count = (props) => {
  console.log(props);
  // useEffect(() => {
  //   props.setCount(props.count + 1);
  // }, [props]);

  const handlePlusClick = () => {
    props.setCount(props.count + 1);
    // props.setCount((prev) => prev + 1);
    console.log("handle");
    console.log(props.count);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            props.setCount(props.count > 1 ? props.count - 1 : 1);
          }}
        >
          -
        </button>
        <div className="countInputText">{props.count}</div>
        <button onClick={handlePlusClick}>+</button>
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
