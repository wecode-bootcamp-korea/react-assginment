import React /*, { useState }*/ from "react";
import "./Count.scss";

const Count = ({ count, setCount }) => {
  //const [num, setNum] = useState(0);
  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            if (count > 1) {
              setCount(count - 1);
            } else {
              return { count };
            }
          }}
          count
        >
          -
        </button>
        <div className="countInputText">{count}</div>
        <button
          onClick={() => {
            setCount(count + 1);

            // props.handlerCount(num * 300);
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
