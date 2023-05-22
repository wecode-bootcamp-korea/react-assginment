import "./ColorButton.scss";

const ColorButton = (props) => {
  const switchColor = () => {
    props.setColor(props.color);
  };
  return (
    <button className={`colorButton ${props.color}`} onClick={switchColor} />
  );
};
export default ColorButton;
