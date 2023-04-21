const Count = (props) => {
  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            props.handleCountChange(props.counting - 1);
          }}
        >
          -
        </button>
        <div className="countInputText">{props.counting}</div>
        <button
          onClick={() => {
            props.handleCountChange(props.counting + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          props.handleCountChange(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
