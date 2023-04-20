import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = ({ color, colors, changeColor }) => {

  // 출력
  return (
    <>
      <div className="color">
        <span className="colorText">
          색상 :
          <div className={`selected ${color}`} />
          {color}
        </span>
        <ColorButton changeColor={changeColor} colors={colors} />
      </div>
    </>
  );

};

export default Color;
