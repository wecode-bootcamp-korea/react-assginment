import React from "react";
import "./Count.scss";

const Count = (props) => {
    const handleMinus = () => {
      if(props.quantity >= 2){
        props.count(props.quantity-1)
        props.price(`${(props.quantity-1)*300}`)
      }
    }
    const handlePlus = () => {
      props.count(props.quantity+1);
      props.price(`${(props.quantity+1)*300}`)
    }
    const handleReset = () => {
      props.count(1)
      props.price('300')
    }
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={handleMinus}>-</button>
        <div className="countInputText">{props.quantity}</div>
        <button onClick={handlePlus}>+</button>
      </div>
      <button className="resetBtn" onClick={handleReset}>
        reset
      </button>
    </div>
  );
};

export default Count;
