import ColorButton from "../ColorButton/ColorButton";
import "./Color.scss";

const Color = ({ colors, color, changeColor }) => {

  // 출력
  return (
    <>
      <div className="color">
        <span className="colorText">
          색상 :
          <div className={`selected ${color}`} />
          {color}
        </span>
        <ColorButton colors={colors} color={color} changeColor={changeColor} />
      </div>
    </>
  );

};

export default Color;
