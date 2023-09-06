import React from "react";
import "./Introduce.scss";
import { Link, useNavigate } from "react-router-dom";

const Introduce = () => {
  const handleInput = () => {
    console.log("input 태그 동작");
  };

  //  const handleButton = () => {
  //         console.log("button 태그 동작")
  //     }

  const navigate = useNavigate();

  const navigateProduct = () => {
    navigate("/product");
  };

  return (
    <div className="introduce">
      <div className="bigBox">
        <div className="pictureBox">
          <img src={"/images/다람쥐.jpg"} alt="myPicture" />
        </div>
        <div className="name">박인국</div>
        <div className="number">49기</div>
        <div className="inputBox">
          <input type="text" className="input" onChange={handleInput} />
          <button className="button" onClick={navigateProduct}>
            클릭
          </button>
        </div>
        <Link className="link" to="/product">
          product 페이지로 이동
        </Link>
      </div>

      <div className="colorCardBox">
        {USER_INFO_LIST.map((info) => (
          <div key={info.id} className="colorCard">
            <div
              className="colorImg"
              style={{ backgroundColor: info.color }}
            ></div>
            <div className="colorName">이름 : {info.name}</div>
            <div className="colorRgb">rgb : {info.rgb}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduce;

const USER_INFO_LIST = [
  { id: "1", name: "red", rgb: "255, 0, 0", color: "rgb(255,0,0)" },
  { id: "2", name: "yellow", rgb: "255, 255, 0", color: "rgb(255, 255, 0)" },
  { id: "3", name: "green", rgb: "0, 128, 0", color: "rgb(0, 128, 0)" },
  { id: "4", name: "blue", rgb: "0, 0 ,255", color: "rgb(0, 0 ,255)" },
];
