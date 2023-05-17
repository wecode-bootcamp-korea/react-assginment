import { Link } from "react-router-dom";
import "./Introduce.scss";
import { useNavigate } from "react-router-dom";

function Introduce() {
  function handleInput() {
    console.log("input 태그 동작");
  }
  let navigate = useNavigate();

  return (
    <div className="wecode">
      <div className="wrap">
        <div className="image">>wecode</div>
        <p className="name">김민정</p>
        <p className="number">46기 </p>

        <div className="btnWrap">
          <input className="inputTxt" type="text" onChange={handleInput} />
          <button
            className="productBtn"
            onClick={() => {
              navigate("/product");
            }}
          >
            클릭
          </button>
        </div>
        <Link to="/product" className="productBtn">
          product 페이지로 이동
        </Link>
      </div>
    </div>
  );
}

export default Introduce;
