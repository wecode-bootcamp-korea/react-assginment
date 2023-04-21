import React, { useState } from "react";
import "./Count.scss";



const Count = (props) => {
    const [number, setNumber] = useState(1);

    const increment = () => {
      setNumber(number + 1);
      props.setTotalPrice(props.totalPrice + props.price)

    }

    const decrement = () => {
     if (number > 1) {
      setNumber(number -1);
      props.setTotalPrice(props.totalPrice - props.price)
     }
     else {
      setNumber(1);
     }
    }

    const resetBtn = () => {
      setNumber(1);
      props.setTotalPrice(300); //수량 변화와 함께 가격변동
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
