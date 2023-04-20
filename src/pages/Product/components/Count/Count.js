const Count = (props) => {
  const handleCountChange = (x) => {
    if (x >= 1) {
      props.handleCountChange(x);
    }
  };
  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            handleCountChange(props.counting - 1);
          }}
        >
          -
        </button>
        <div className="countInputText">{props.counting}</div>
        <button
          onClick={() => {
            handleCountChange(props.counting + 1);
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
