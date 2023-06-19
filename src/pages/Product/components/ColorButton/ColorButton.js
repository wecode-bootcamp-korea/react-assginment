import "./ColorButton.scss";

const ColorButton = ({ textColor, setTextColor }) => {
  return (
    <button
      className={`colorButton ${textColor}`}
      onClick={() => {
        setTextColor(textColor);
      }}
    />
  );
};

export default ColorButton;
