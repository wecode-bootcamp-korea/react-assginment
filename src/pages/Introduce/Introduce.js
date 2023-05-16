import "./Introduce.scss";
import { Link, Navigate, UseNavigate, useNavigate } from "react-router-dom";

const Introduce = () => {
  const navigate = useNavigate();
  const goToProduct = () => {
    navigate("/product");
  };
  return (
    <main>
      <div className="introduce">
        <div className="card">wecode</div>
        <p className="name">장건웅</p>
        <p className="yearTh">46기</p>
        <div className="form-wrap">
          <input className="introduce-input" onChange={handleInput} />
          <button
            className="introduce-button"
            value="버튼"
            onClick={(handleButton, goToProduct)}
          >
            클릭
          </button>
        </div>
        <Link to="/product">Product 페이지로 이동</Link>
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
