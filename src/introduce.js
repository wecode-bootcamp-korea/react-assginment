const Introduce = () => {
  const handleButton = () => {
    console.log("button tag 동작");
  };
  const changeInput = () => {
    console.log("input value 변동");
  };
  return (
    <div className="profile">
      <div className="profile-box">
        <img
          className="profile-image"
          alt="catPhoto"
          src="images/profile.png"
        ></img>
        <h3 className="user-name">김수정</h3>
        <h4 className="class-number">47기</h4>
        <div>
          <input className="write-input" onChange={changeInput}></input>
          <button className="click-button" onClick={handleButton}>
            클릭
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
