import React, {useState} from "react";
import "./Count.scss";

const Count = () => {
  const [countChange, setCountChange] = useState(1);

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => { setCountChange(countChange - 1) }}>-</button>
        <div className="countInputText"> { countChange } </div>
        <button onClick={() => { setCountChange(countChange + 1) }}>+</button>
      </div>
      <button className="resetBtn" onClick={() => { setCountChange(1) }}>
        reset
      </button>
    </div>
  );
};

export default Count;
