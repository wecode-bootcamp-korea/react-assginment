import "./Introduce.scss";

const Introduce = () => {
  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const handleButton = () => {
    console.log("button 태그 동작");
  };

  return (
    <div className="introduce">
      <div className="wrapper">
        <img src="/images/cat.jpeg"></img>

        <div className="myDetail">
          <div className="myName">김준섭</div>
          <div className="numb">45기</div>
        </div>

        <div className="inBtn">
          <input className="inputs" onChange={handleInput}></input>
          <button className="btns" onClick={handleButton}>
            버튼
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
