const ColorButton = (props) => {
  return (
    <div>
      <button
        className={`colorButton ${props.color}`}
        onClick={() => {
          props.colorHandlerButton(props.color);
        }}
      />
    </div>
  );
};

export default ColorButton;
