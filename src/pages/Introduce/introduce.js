import { Link } from "react-router-dom";
import "./introduce.scss";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const changeInput = () => {};
  const navigate = useNavigate();
  return (
    <div className="introduce">
      <div className="profile">
        <div className="profile-box">
          <img
            className="profile-image"
            alt="catPhoto"
            src="images/profile.png"
          />
          <h3 className="user-name">김수정</h3>
          <h4 className="class-number">47기</h4>
          <div>
            <input className="write-input" onChange={changeInput} />
            <Link to="/Product">
              <button
                className="click-button"
                onClick={() => {
                  navigate("/product");
                }}
              >
                클릭
              </button>
            </Link>
          </div>
          <a href="/Product">product 페이지로 이동</a>
        </div>
        <div className="profile-list">
          {COLOR_BOX.map((color) => (
            <div className="profile-box">
              <div className={`box-color ${color.title}`}></div>
              <h4>이름: {color.title}</h4>
              <h4>rgb: {color.rgb}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduce;

const COLOR_BOX = [
  { id: 1, title: "red", rgb: "255, 0, 0" },
  { id: 2, title: "yellow", rgb: "255, 255, 0" },
  { id: 3, title: "green", rgb: "0, 128, 0" },
  { id: 4, title: "blue", rgb: "0, 0, 255" },
];
