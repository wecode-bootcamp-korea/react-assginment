import React, {useState} from "react";
import "./Count.scss";

const Count = () => {

  const [number, setNumber] = useState(1);

  const numberPlus = () => {setNumber(number+1)};
  const numberMinus = () => {
    if(number===1){
      console.log("감소시킬 수 없습니다!")
    } else {
      setNumber(number-1)
      }
    }
  

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={numberMinus}>-</button>
        <div className="countInputText">{number}</div>
        <button onClick={numberPlus}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {setNumber(1)}}>
        reset
      </button>
    </div>
  );
};

export default Count;
