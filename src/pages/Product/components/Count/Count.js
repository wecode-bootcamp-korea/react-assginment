import React from "react";
import "./Count.scss";

const Count = (props) => {
  // const [number, setNumber] = useState(1);

  const numberPlus = () => {
    props.setNumber(props.number + 1);
  };
  const numberMinus = () => {
    if (props.number === 1) {
      console.log("감소시킬 수 없습니다!");
    } else {
      props.setNumber(props.number - 1);
    }
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={numberMinus}>-</button>
        <div className="countInputText">{props.number}</div>
        <button onClick={numberPlus}>+</button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          props.setNumber(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
