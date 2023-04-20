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
        <div className="colorHandler">
          <ColorButton colors={colors[0]} changeColor={changeColor} />
          <ColorButton colors={colors[1]} changeColor={changeColor} />
          <ColorButton colors={colors[2]} changeColor={changeColor} />
        </div>
      </div>
    </>
  );

};

export default Color;
