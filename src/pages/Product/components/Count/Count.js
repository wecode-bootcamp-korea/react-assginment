import React from "react";
import "./Count.scss";

const Count = (props) => {
  return (
    <>
      <div className="count">
        <div className="countInput">
          <button
            onClick={() => {
              if (props.countChange > 1)
                props.setCountChange(props.countChange - 1);
            }}
          >
            -
          </button>
          <div className="countInputText"> {props.countChange} </div>
          <button
            onClick={() => {
              props.setCountChange(props.countChange + 1);
            }}
          >
            +
          </button>
        </div>
        <button
          className="resetBtn"
          onClick={() => {
            props.setCountChange(1);
          }}
        >
          reset
        </button>
      </div>
    </>
  );
};

export default Count;
