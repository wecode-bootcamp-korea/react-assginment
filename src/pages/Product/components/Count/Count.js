const Count = (props) => {
  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            if (props.counting > 1) props.setCounting(props.counting - 1);
          }}
        >
          -
        </button>
        <div className="countInputText">{props.counting}</div>
        <button
          onClick={() => {
            props.setCounting(props.counting + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          props.setCounting(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
