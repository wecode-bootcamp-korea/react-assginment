import React from "react";
import "./Count.scss";

const Count = (props) => {
  console.log(props);

  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            props.setCount(props.count > 1 ? props.count - 1 : 1);

            /* 
            
            왜 작동이 안되는지, second/third count는 왜 +1되어 나타나는지 고민 필요하다!!
            console.log("first count", count);
            // count = count - 1;
            --count;
            console.log("second count", count);
            count > 0 ? setCount(count) : setCount(1);
            console.log("third count", count); */
            /*  count = count - 1;

            if (count <= 1) {
              return setCount(1);
            }
            setCount(count); */
          }}
        >
          -
        </button>
        <div className="countInputText">{props.count}</div>
        <button
          onClick={() => {
            /* // 1번 코드
            count = count + 1;
            setCount(count); */

            // 2번 코드
            props.setCount(props.count + 1);
          }}
        >
          +
        </button>
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
