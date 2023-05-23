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
      <main className="IntroduceMain">
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

        <div className="secondGround">
          {INTRO_CARD.map((cardList) => {
            return (
              <div className="secondBox" key={cardList.key}>
                <div className={`secondBackground ${cardList.name}`} />
                <p className="secondName">이름: {cardList.name}</p>
                <p className="rgn">rgb: {cardList.rgb}</p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Introduce;

const INTRO_CARD = [
  { id: 1, name: "red", rgb: "255, 0, 0" },
  { id: 2, name: "yellow", rgb: "255, 255, 0" },
  { id: 3, name: "green", rgb: "0, 128, 0" },
  { id: 4, name: "blue", rgb: "0, 0, 225" },
];
