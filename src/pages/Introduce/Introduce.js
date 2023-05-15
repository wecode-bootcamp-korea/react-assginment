import "./Introduce.css";

const handleInput = () => {
  console.log("input 태그 동작");
};

const handleButton = () => {
  console.log("button 태그 동작");
};

const Introduce = () => {
  return (
    <div className="introduce">
      <img src="images/avatar.jpg" alt="" />
      <p className="name">백지율</p>
      <p className="th">46기</p>
      <div className="textInput">
        <input type={"text"} onClick={handleInput} placeholder="입력"></input>
        <button onClick={handleButton}>클릭</button>
      </div>
    </div>
  );
};

export default Introduce;
