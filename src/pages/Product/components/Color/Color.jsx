import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = ({ color, colors, changeColor, upColor }) => {

  // 출력
  return (
    <>
      <div className="color">
        <span className="colorText">
          색상 :
          <div className={`selected ${color}`} />
          {color}
        </span>
        <ColorButton changeColor={changeColor} colors={colors} upColor={upColor} />
      </div>
    </>
  );

};

export default Color;
