import "./ColorCard.scss";

function ColorCard(props) {
  const {
    color: { name, rgb },
  } = props;

  console.log("destructuring", name, rgb);
  console.log("colorcard", props);
  console.log(props.color.name, props.color.rgb);
  // const { name, rgb } = props;
  // console.log(name, rgb);

  return (
    <div className="colorCard">
      <div className={`colorCardPoster ${name}`} />
      <div className="colorCardInfo">
        <p className="colorCardInfoName">이름 : {name}</p>
        <p className="colorCardInfoRgb">rgb : {rgb} </p>
      </div>
    </div>
  );
}

export default ColorCard;
