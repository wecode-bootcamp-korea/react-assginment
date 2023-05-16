import { Link } from "react-router-dom";
import "./Introduce.scss";

function Introduce() {
  function handleInput() {
    console.log("input 태그 동작");
  }

  return (
    <div className="wecode">
      <div className="Wrap">
        <div className="image">>wecode</div>
        <p className="Name">김민정</p>
        <p className="Number">46기 </p>

        <div className="btnWrap">
          <input type={"text"} onChange={handleInput} />
          <Link to="/product" className="productBtn">
            클릭!
          </Link>
        </div>
        <Link to="/product" className="productBtn">
          product 페이지로 이동
        </Link>
      </div>
    </div>
  );
}

export default Introduce;
