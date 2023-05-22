import "./Color.scss";
import ColorButton from "../ColorButton/ColorButton";

const Color = ({ color, setColor }) => {
  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className="selected" style={{ backgroundColor: color }} />
        {color}
      </span>
      <div className="colorHandler">
        <ColorButton color="white" setColor={setColor} />
        <ColorButton color="red" setColor={setColor} />
        <ColorButton color="yellow" setColor={setColor} />
      </div>
    </div>
  );
};

export default Color;
