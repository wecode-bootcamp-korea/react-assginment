import { Link, useNavigate } from "react-router-dom";
import IntroduceChild from "./IntroduceChild";
import "./Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();

  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const handleButton = () => {
    console.log("button 태그 동작");
    navigate("/product");
  };

  const COLOR_CARD_LIST = [
    { id: 1, name: "red", rgb: "(255, 0, 0)" },
    { id: 2, name: "yellow", rgb: "(255, 255, 0)" },
    { id: 3, name: "green", rgb: "(0, 128, 0)" },
    { id: 4, name: "blue", rgb: "(0, 0, 255)" },
  ];

  return (
    <>
      <div className="introduce">
        <div className="card">wecode</div>
        <p className="name">장건웅</p>
        <p className="yearTh">46기</p>
        <div className="form-wrap">
          <input className="introduce-input" onChange={handleInput} />
          <button
            className="introduce-button"
            value="버튼"
            onClick={handleButton}
          >
            클릭
          </button>
        </div>
        <Link to="/product">Product 페이지로 이동</Link>
      </div>
      <IntroduceChild colorCardList={COLOR_CARD_LIST} />
    </>
  );
};

export default Introduce;
