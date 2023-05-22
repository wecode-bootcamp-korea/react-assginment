import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Introduce.scss";

function Introduce() {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate("/product");
  };

  const handleInput = () => {
    console.log("input 태그 동작");
  };

  return (
    <>
      <main>
        <div className="box">
          <img alt="위코드로고" src="images/wecode.webp" />
          <p className="name">조수진</p>
          <p className="number">46기</p>
          <div className="boxBottom">
            <input onChange={handleInput}></input>
            <button onClick={goToProduct}>클릭</button>
          </div>
          <Link className="pageToPage" to="/product">
            product 페이지로 이동
          </Link>
        </div>
      </main>
    </>
  );
}

export default Introduce;
