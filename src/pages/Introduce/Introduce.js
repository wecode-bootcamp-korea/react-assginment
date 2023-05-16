import "./Introduce.css";

const Introduce = () => {
  return (
    <main>
      <div className="introduce">
        <img
          className="myprofile"
          src="images/myprofile.JPG"
          alt="프로필사진"
        />
        <p className="name">장건웅</p>
        <p className="YearTh">46기</p>
        <div className="form-wrap">
          <input className="introduce-input" onChange={handleInput} />
          <button
            className="introduce-button"
            value="버튼"
            onClick={handleButton}
          />
        </div>
      </div>
    </main>
  );
};

const handleInput = () => {
  console.log("input 태그 동작");
};
const handleButton = () => {
  console.log("button 태그 동작");
};

export default Introduce;
