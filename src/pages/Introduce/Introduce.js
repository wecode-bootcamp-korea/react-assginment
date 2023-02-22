import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Introduce/Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate("/product");
  };

  function handleInput() {
    console.log("input 태그동작");
  }

  return (
    <div className="introduce">
      <div className="logobox">
        <h1 className="text">wecode</h1>
      </div>
      <p className="name"> 이기태</p>
      <p className="th"> 43기</p>
      <form>
        <input type="text" onChange={handleInput} />

        <button type="button" className="login_btn" onClick={goToProduct}>
          클릭
        </button>
      </form>

      <p className="moveToProduct">
        <Link to="/product">Product 페이지로 이동</Link>
      </p>
    </div>
  );
};

export default Introduce;
