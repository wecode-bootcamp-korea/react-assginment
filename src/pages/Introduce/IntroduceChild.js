const IntroduceChild = ({ colorCardList }) => {
  return (
    <div id="colorCardContainer">
      {colorCardList.map((color) => (
        <div key={color.id} className="colorCardContainer">
          <div
            className="colorCard"
            style={{ backgroundColor: color.name }} //여기 왜 중괄호를 두번 치는건가요...?
          ></div>
          <p className="colorCardText">이름 : {color.name}</p>
          <p className="colorCardText">rgb : {color.rgb}</p>
        </div>
      ))}
    </div>
  );
};
export default IntroduceChild;
