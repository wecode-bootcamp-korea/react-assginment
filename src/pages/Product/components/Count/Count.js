import React from "react";
import "./Count.scss";

const Count = ({ count, setCount }) => {
  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            if (count <= 1) {
              return;
            }

            // {
            //   props.count <= 1 ? props.count : props.setCount(props.count - 1);
            //   //여기서 오류가 난다고 뜨는데 작동은 하고, 뭐가 문제인지 알 수 없음...
            // }
            setCount(count - 1);
          }}
        >
          -
        </button>
        <div className="countInputText">{count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          setCount(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
