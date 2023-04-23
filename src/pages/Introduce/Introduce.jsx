import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();

  const handleInput = () => {
    console.log(`input 태그 동작`);
  };

  const handleButton = () => {
    console.log(`button 태그 동작`);
    navigate("/product");
  };

  return (
    <div className="introduce">

      {/* myCard */}
      <div className="myCard">
        <div className="proImg"></div>
        <div className="name">
          <span>양진민</span>
        </div>
        <div className="numTh">
          <span>45기</span>
        </div>
        <div className="input" onChange={() => handleInput()}>
          <input type="text" />
          <button onClick={() => handleButton()}>클릭</button>
        </div>
        <div>
          <Link to="/product">Product 페이지로 이동</Link>
        </div>
      </div>

      {/* cards */}
      <div className="cards">
        {USERS_CARD.map(({ id, name, rgb }) =>
          <div className="card" key={id}>
            <div className={`cardImg ${name}`}></div>
            <div className="name">
              <span>이름: {name}</span>
            </div>
            <div className="rgb">
              <span>rgb: {rgb}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Introduce;

const USERS_CARD = [
  { id: 1, name: `red`, rgb: `255, 0, 0` },
  { id: 2, name: `yellow`, rgb: `255, 255, 0` },
  { id: 3, name: `green`, rgb: `0, 128, 0` },
  { id: 4, name: `blue`, rgb: `0, 0, 255` },
];
