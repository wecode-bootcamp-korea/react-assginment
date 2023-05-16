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
        <p className="thYear">46기</p>
      </div>
    </main>
  );
};

export default Introduce;
