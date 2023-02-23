import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  const { color, setColor } = props;
  return (
    <div className="ColorButton">
      <button
        className={`color ${color}`}
        onClick={() => {
          setColor(color);
        }}
      />
    </div>
  );
};

export default ColorButton;
